import { createContext, useContext, useEffect, useState } from "react";
import { CityType, PlaceStatusObject, PlaceType } from "../types/types";
import { PlaceStatus } from "../types/enums";

const GameContext = createContext({} as GameContextType);

export const GameProvider = (props : { children : JSX.Element|JSX.Element[] }) => {
	const [city, setCity] = useState(undefined as CityType);
	const [places, setPlaces] = useState([] as PlaceType[]);

	const [placeStatusObject, setPlaceStatusObject] = useState({
		1: PlaceStatus.Unread,
		2: PlaceStatus.Unread,
		3: PlaceStatus.Unread,
		4: PlaceStatus.Unread,
		5: PlaceStatus.Unread,
	} as PlaceStatusObject);

	useEffect(() => {
		if (city === 'Oslo' || city === 'Bergen') {
			import('../data/' + city.toLowerCase() + '2024.json')
				.then((data) => setPlaces(data.default as PlaceType[]));
		}
	}, [city]);

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
	placeStatusObject: PlaceStatusObject,
	updateStatus: ( id : number, newStatus : number ) => void,
	places : PlaceType[],
}

export const useGame = () => useContext(GameContext);