import { useState } from "react";
import { Position } from "../../../types/types"
import getEnturData from "../../../utils/getEnturData";

const Journey = ( props : {
	myPosition : Position|undefined,
	targetPosition : Position,
}) => {

	const [journeyLoaded, setJourneyLoaded] = useState('unpressed' as 'unpressed'|'pressed'|'loaded'|'error');
	const [pattern, setPattern] = useState([] as TripPatternLegs);
	const [alternativePattern, setAlternativePattern] = useState([] as TripPatternLegs);

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
		foot: '👣',
	}

	const fetchData = async () => {
		if (props.myPosition) {
			setJourneyLoaded('pressed');

			const data : EnturData|null = await getEnturData(props.myPosition, props.targetPosition);

			if (data === null) {
				setPattern([]);
				setAlternativePattern([]);
				setJourneyLoaded('error');
				return;
			}

			if ( data?.data?.trip?.tripPatterns?.length ) {
				const patterns = data.data.trip.tripPatterns;
				setPattern( patterns[0].legs );
				if (patterns.length > 1 && patterns[0].legs.length === 1 && patterns[0].legs[0].mode === 'foot') {
					setAlternativePattern( patterns[1].legs );
				}
				else {
					setAlternativePattern([]);
				}
			}
			else {
				setPattern([]);
				setAlternativePattern([]);
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
			{pattern.length ?
			<ul>
				{pattern.map((el, index) => <li>{<div key={index} className="emoji">{modes[el.mode] || el.mode}</div>}{el.line ? <div className="line">{el.line.publicCode}</div> : (el.mode === 'foot' ? `${Math.round(el.distance || 0)} m` : '')}</li>)}
			</ul>
			: (journeyLoaded === 'error' ? <p>Klarte ikke å få kontakt med Enturs reiseplanlegger. Er du tilkoblet Internett?</p> : <p>Fant ingen reiserute.</p>)}
			{alternativePattern.length ?
			<><h4>Alternativ reiserute:</h4>
			<ul>
				{alternativePattern.map((el, index) => <li>{<div key={index} className="emoji">{modes[el.mode] || el.mode}</div>}{el.line ? <div className="line">{el.line.publicCode}</div> : (el.mode === 'foot' ? `${Math.round(el.distance || 0)} m` : '')}</li>)}
			</ul></>
			: null}
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
		distance? : number,
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