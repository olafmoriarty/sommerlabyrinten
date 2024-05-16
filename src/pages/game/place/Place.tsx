import { useState, useEffect } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useGame } from '../../../contexts/GameContext';
import getDistance from '../../../utils/getDistance';
import getDirection from '../../../utils/getDirection';
import { Direction, TriviaQuestion } from '../../../types/types';
import { PlaceStatus } from '../../../types/enums';
import Journey from './Journey';
import Trivia from './Trivia';

const Place = (props : Props) => {
	const {updateStatus} = useGame();

	const [distance, setDistance] = useState( undefined as number|undefined );
	const [direction, setDirection] = useState( undefined as Direction|undefined );

	const directions = {
		NW: 'nordvest',
		N: 'nord',
		NE: 'nordøst',
		E: 'øst',
		SE: 'sørøst',
		S: 'sør',
		SW: 'sørvest',
		W: 'vest',
	}

	useEffect(() => {
		if (props.myPosition) {
			setDistance( getDistance(props.myPosition.coords, { latitude: props.lat, longitude: props.long }));
			setDirection( getDirection(props.myPosition.coords, { latitude: props.lat, longitude: props.long }) )
		}
	}, [props.myPosition]);

	if (props.collapsed) {
		return (
			<div className={`place collapsed${props.status === PlaceStatus.Solved ? ' solved' : ''}`} onClick={() => {
				props.setSelectedPlace( props.id );
				if (props.status === PlaceStatus.Unread) {
					updateStatus(props.id, PlaceStatus.Read);
				}
			}}>
			<p className="title">{props.status >= PlaceStatus.Visited ? props.name : (props.status > PlaceStatus.Unread ? props.title : '???')}</p>
			<p className="distance">{distance?.toFixed(0)} m</p>

			</div>
		);
	}

	if (props.status === PlaceStatus.Solved) {
		return <div className="place">
			<h3 onClick={() => props.setSelectedPlace( 0 )}>{props.name}</h3>
			<p><strong>{(props.rewardType === 'key' ? 'Du har funnet en nøkkel ved {place}!' : 'Du har funnet en ledetråd ved {place}!').replace('{place}', props.name)}</strong></p>
			<p>{props.solvedDesc}</p>
		</div>
	}

	if (props.status === PlaceStatus.Visited) {
		return (
			<div className="place trivia-place">
				<button className="close-window-icon" onClick={() => props.setSelectedPlace( 0 )}><Icon icon={faTimes} /></button>
				<p>Velkommen til</p><h3>{props.name}!</h3>
				<p>Svar på disse spørsmålene for å finne neste ledetråd.</p>
				<Trivia {...props} />
			</div>
		)
	
	}

	return (
		<div className="place">
			<h3 onClick={() => props.setSelectedPlace( 0 )}>{props.title}</h3>
			<p>{props.desc}</p>
			<h4>Avstand til dette stedet:</h4>
			<p className="distance">{distance?.toFixed(0)}</p><p className="meters-in-direction">meter {direction ? directions[direction] : ''}</p>
			{distance === undefined || distance > 50 
			?
			<p className="find-clue-desc">Når du er maks 50 meter unna dette stedet, kan du lete etter spor der.</p>
			: 
			<button className="find-clue" onClick={() => updateStatus(props.id, PlaceStatus.Visited)} disabled={distance === undefined || distance > 50}>Let etter sporet!</button>
			}
			<Journey myPosition={props.myPosition?.coords} targetPosition={{ latitude: props.lat, longitude: props.long }} />
		</div>
	)

}

type Props = {
	id : number,
	lat : number,
	long : number,
	title : string,
	desc : string,
	name : string,
	solvedDesc : string,
	collapsed? : boolean,
	status : number,
	questions : TriviaQuestion[],
	myPosition : GeolocationPosition|undefined,
	rewardType : string,
	rewardId? : number,
	setSelectedPlace : ( id : number ) => void,
}

export default Place;