import { useState } from "react";
import { useGame } from "../../contexts/GameContext";
import { CityType } from "../../types/types";
import { useNotifications } from "../../contexts/NotificationContext";
import Introduction from "../dialogs/Introduction";

const TitleScreen = () => {
	const [selectedCity, setSelectedCity] = useState(undefined as CityType);
	const { setCity } = useGame();
	const { addNotificationToQueue } = useNotifications();

	const selectCity = () => {
		if (!selectedCity) {
			return;
		}
		addNotificationToQueue(<Introduction />);


		setCity(selectedCity);
	}

	return (
		<main className="title-screen">
		<h1><img src="./logo.png" alt="Sommerlabyrinten 2024" className="logo" /></h1>

		<h2>Velg by:</h2>

		
		<section className="city-selector">
			<CityOption cityName="Oslo" selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
			<CityOption cityName="Bergen" selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
		</section>

		<p><button className="start-button" onClick={() => selectCity()} disabled={selectedCity === undefined}>Start spill!</button></p>
		</main>
	)
}

const CityOption = (props : { cityName : string, selectedCity : string|undefined, setSelectedCity : ( city : string ) => void }) => {

	const citySimplified = props.cityName.toLocaleLowerCase().replace(' ', '');
	return (
		<label htmlFor={`radio-${citySimplified}`}>
			<input 
				type="radio" 
				name="city" 
				id={`radio-${citySimplified}`}
				checked={props.selectedCity === props.cityName}
				onChange={() => props.setSelectedCity(props.cityName)} 
			/>
			{props.cityName}
		</label>)
	;
}

export default TitleScreen;