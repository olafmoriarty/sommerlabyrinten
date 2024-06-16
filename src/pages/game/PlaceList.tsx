import { useState, useEffect, useRef } from 'react';
import Place from './place/Place';
import getDistance from '../../utils/getDistance';
import { useGame } from '../../contexts/GameContext';
import { PlaceStatus } from '../../types/enums';

const PlaceList = () => {
	const {places, placeStatusObject} = useGame();

	const [selectedPlace, setSelectedPlace] = useState(0);

	const [myPosition, setMyPosition] = useState(undefined as GeolocationPosition|undefined);

	const watcher = useRef(0);

	useEffect(() => {
			watcher.current = navigator.geolocation.watchPosition((position) => setMyPosition(position));

			return (() => {
			navigator.geolocation.clearWatch(watcher.current);
		});
	}, []);

	if (!myPosition) {
		return (
			<main className="text-box">
				<h2>Slå på geolokasjon</h2>
				<p>For å kunne spille Sommerlabyrinten, trenger denne appen å vite hvor du er.</p>
				<p>Spillet handler om å finne og oppsøke fysiske steder, og det er derfor ikke mulig å spille det uten å gi appen tilgang til lokasjonen din.</p>
				<p><strong>Din lokasjon vil aldri bli lagret noe sted, sendt inn til Sommerlabyrinten eller delt med andre.</strong></p>
				<p><a href="/personvern">Les mer om hvordan Sommerlabyrinten behandler data</a></p>
			</main>
		);
	
	}

	return(
		<section className="place-list">
		<h2>Aktive ledetråder</h2>
		{places
		.filter(el => placeStatusObject[el.id])
		.sort((a, b) => {
			if (placeStatusObject[a.id] >= PlaceStatus.Solved && placeStatusObject[b.id] < PlaceStatus.Solved) {
				return 1;
			}
			if (placeStatusObject[b.id] >= PlaceStatus.Solved && placeStatusObject[a.id] < PlaceStatus.Solved) {
				return -1;
			}
			if (!myPosition) {
				return 0;
			}
			const distanceA = getDistance(myPosition.coords, {latitude: a.lat, longitude: a.long});
			const distanceB = getDistance(myPosition.coords, {latitude: b.lat, longitude: b.long});
			if (distanceA < distanceB) {
				return -1;
			}
			return 1;
		})
		.map(el => <Place key={el.id} myPosition={myPosition} {...el} collapsed={el.id !== selectedPlace} setSelectedPlace={setSelectedPlace} status={placeStatusObject[el.id]} />)}
		{/*<h2>Tidligere ledetråder</h2>*/}
		</section>
	)

}

export default PlaceList;