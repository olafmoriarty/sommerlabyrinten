import { useState } from "react";
import { Position } from "../../../types/types"
import getEnturData from "../../../utils/getEnturData";

const Journey = ( props : {
	myPosition : Position|undefined,
	targetPosition : Position,
}) => {

	const [journeyLoaded, setJourneyLoaded] = useState('unpressed' as 'unpressed'|'pressed'|'loaded'|'error');
	const [pattern, setPattern] = useState([] as TripPatternLegs);

	const modes : { [mode : string] : string} = {
		air: '✈️',
		bus: '🚌',
		cableway: '🚠',
		coach: '🚌',
		funicular: '🚡',
		lift: '🛗',
		metro: '🚇',
		monorail: '🚝',
		rail: '🚂',
		taxi: '🚕',
		trolleybus: '🚎',
		tram: '🚋',
		water: '🛳️',
	}

	const fetchData = async () => {
		if (props.myPosition) {
			setJourneyLoaded('pressed');

			const data : EnturData|null = await getEnturData(props.myPosition, props.targetPosition);

			if (data === null) {
				setPattern([]);
				setJourneyLoaded('error');
				return;
			}

			if ( data?.data?.trip?.tripPatterns?.length ) {
				setPattern( data.data.trip.tripPatterns[0].legs );
			}
			else {
				setPattern([]);
			}
			setJourneyLoaded('loaded');
		}
	}

	if (journeyLoaded === 'unpressed') {
		return <button className="show-journey" onClick={() => fetchData()}>Foreslå reiserute</button>;
	}

	if (journeyLoaded === 'pressed') {
		return <p>Laster forslag ...</p>;
	}

	return (
		<section className="journey">
			<h4>Foreslått reiserute:</h4>
			{pattern.filter(el => el.mode !== 'foot').length ?
			<ul>
				{pattern.filter(el => el.mode !== 'foot').map((el, index) => <li>{<div key={index} className="emoji">{modes[el.mode] || el.mode}</div>}{el.line ? <div className="line">{el.line.publicCode}</div> : ''}</li>)}
			</ul>
			: (journeyLoaded === 'error' ? <p>Klarte ikke å få kontakt med Enturs reiseplanlegger. Er du tilkoblet Internett?</p> : <p>Fant ingen reiserute.</p>)}
			{journeyLoaded !== 'error' ? <p className="entur">Data made available by Entur</p> : null}
			<div className="journey-footer">
				{journeyLoaded !== 'error' ? <div className="entur">
					<p><img src="./entur.svg" alt="Entur" /></p>
				</div> : null}
				<button className="show-journey" onClick={() => fetchData()}>Oppdater reiserute</button>
			</div>
		</section>
	)
}

type TripPatternLegs = {
		mode : string,
		line : null | { publicCode : string }
	}[]

type EnturData = {
	data : {
		trip : {
			tripPatterns : {
				legs : TripPatternLegs
			}[]
		}
	}
}

export default Journey;