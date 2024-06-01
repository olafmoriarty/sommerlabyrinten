import { useState } from "react";
import { useGame } from "../../contexts/GameContext";
import { CityType } from "../../types/types";
import { useNotifications } from "../../contexts/NotificationContext";
import Introduction from "../dialogs/Introduction";

const TitleScreen = () => {
	const [selectedCity, setSelectedCity] = useState(undefined as CityType);
	const { setCity, validCities } = useGame();
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
			{validCities.map(el => <CityOption cityName={el} selectedCity={selectedCity} setSelectedCity={setSelectedCity} />)}
		</section>
		<p className="city-description">(Jeg håper å kunne legge til flere byer i framtiden, men foreløpig må du være i Oslo for å spille Sommerlabyrinten. Beklager, det var det jeg rakk å lage.)</p>

		<p><button className="start-button" onClick={() => selectCity()} disabled={selectedCity === undefined}>Start spill!</button></p>
		<p><strong>NB:</strong> Når du starter spillet, kommer nettleseren din til å spørre deg om lokasjonsdata. Hvis du ikke tillater dette, kommer ikke spillet til å virke!</p>
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