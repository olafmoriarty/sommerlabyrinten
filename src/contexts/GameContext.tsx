import { createContext, useContext, useEffect, useState } from "react";
import { CityType, PlaceStatusObject, PlaceType } from "../types/types";
import { PlaceStatus } from "../types/enums";

const GameContext = createContext({} as GameContextType);

export const GameProvider = (props : { children : JSX.Element|JSX.Element[] }) => {
	const [city, setCity] = useState(undefined as CityType);
	const [places, setPlaces] = useState([] as PlaceType[]);
	const year = 2024;
	const validCities = ['Oslo'];

	const [placeStatusObject, setPlaceStatusObject] = useState({
		1: PlaceStatus.Unread,
		8: PlaceStatus.Unread,
		15: PlaceStatus.Unread,
		22: PlaceStatus.Unread,
		29: PlaceStatus.Unread,
	} as PlaceStatusObject);

	// Get data from localstorage
	useEffect(() => {
		const currentGame = localStorage.getItem('currentGame');
		if (!currentGame) {
			return;
		}
		const currentGameObject : { city : string, year : number } = JSON.parse(currentGame);
		setCity(currentGameObject.city);
		const savedPlaceStatus = localStorage.getItem(`${currentGameObject.year}-${currentGameObject.city}`);
		if (!savedPlaceStatus) {
			return;
		}
		setPlaceStatusObject( JSON.parse(savedPlaceStatus) );

	}, []);

	// Import place data
	useEffect(() => {
		if (city && validCities.includes(city)) {
			import('../data/' + city.toLowerCase() + year + '.json')
				.then((data) => setPlaces(data.default as PlaceType[]));
		}
	}, [city]);

	useEffect(() => {
		if (city && year) {
			localStorage.setItem('currentGame', JSON.stringify({city: city, year: year}));
		}
	}, [city, year]);

	// Update localstorage
	useEffect(() => {
		if (city && year) {
			localStorage.setItem(`${year}-${city}`, JSON.stringify(placeStatusObject));
		}
	}, [placeStatusObject]);

	const updateStatus = (place : number, newStatus : number) => {
		const newObject = { ...placeStatusObject };
		newObject[place] = newStatus;
		setPlaceStatusObject( oldObject => {
			const newObject = { ...oldObject };
			newObject[place] = newStatus;
				return newObject;
		} );
	}

	const value : GameContextType = {
		city: city,
		setCity: setCity,
		validCities: validCities,
		placeStatusObject: placeStatusObject,
		updateStatus: updateStatus,
		places : places,
	};

	return (
		<GameContext.Provider value={value}>
			{props.children}
		</GameContext.Provider>
	)
}

type GameContextType = {
	city : CityType,
	setCity : (city : CityType) => void,
	validCities : string[],
	placeStatusObject: PlaceStatusObject,
	updateStatus: ( id : number, newStatus : number ) => void,
	places : PlaceType[],
}

export const useGame = () => useContext(GameContext);