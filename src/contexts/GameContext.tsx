import { createContext, useContext, useEffect, useState } from "react";
import { AchievementType, CityType, PlaceStatusObject, PlaceType } from "../types/types";
import { PlaceStatus } from "../types/enums";
import { useNotifications } from "./NotificationContext";
import Achievement from "../pages/dialogs/Achievement";
import ThreeKeysFound from "../pages/dialogs/ThreeKeysFound";

const GameContext = createContext({} as GameContextType);

export const GameProvider = (props : { children : JSX.Element|JSX.Element[] }) => {
	const {addNotificationToQueue} = useNotifications();
	const [city, setCity] = useState(undefined as CityType);
	const [places, setPlaces] = useState([] as PlaceType[]);
	const [achievements, setAchievements] = useState([] as AchievementType[]);
	const [checkForAchievementsOnLoad, setCheckForAchievementsOnLoad] = useState(false);
	const [lastPlaceFound, setLastPlaceFound] = useState(0);
	const year = 2024;
	const validCities = ['Oslo'];

	const [placeStatusObject, setPlaceStatusObject] = useState({
		1: PlaceStatus.Unread,
		8: PlaceStatus.Unread,
		15: PlaceStatus.Unread,
		22: PlaceStatus.Unread,
		29: PlaceStatus.Unread,
	} as PlaceStatusObject);

	const [myAchievements, setMyAchievements] = useState([] as number[]);

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
		const savedPlaceStatusObject = JSON.parse(savedPlaceStatus);
		setPlaceStatusObject( savedPlaceStatusObject );
		setCheckForAchievementsOnLoad(true);
	}, []);

	// Import place data
	useEffect(() => {
		if (city && validCities.includes(city)) {
			import(`../data/${city.toLowerCase()}${year}.json`)
				.then((data) => setPlaces(data.default as PlaceType[]));
				import(`../data/${city.toLowerCase()}${year}-achievements.json`)
				.then((data) => setAchievements(data.default as AchievementType[]));
		}
	}, [city]);

	useEffect(() => {
		if (city && year) {
			localStorage.setItem('currentGame', JSON.stringify({city: city, year: year}));
		}
	}, [city, year]);

	useEffect(() => {
		// Update localstorage
		if (city && year) {
			localStorage.setItem(`${year}-${city}`, JSON.stringify(placeStatusObject));
		}

		// Check if treasure chamber is found
		if (!placeStatusObject[99] && places.filter(el => el.rewardType === 'key' && placeStatusObject[el.id] === PlaceStatus.Solved).length >= 3) {
			updateStatus(99, PlaceStatus.Unread);
			addNotificationToQueue(<ThreeKeysFound />);
		}
	}, [placeStatusObject]);

	// If places are already found on load, check for achievements
	useEffect(() => {
		if (places.length && achievements.length && checkForAchievementsOnLoad) {
			checkForAchievements({ noNotification: true });
		}
	}, [places.length > 0, achievements.length > 0, checkForAchievementsOnLoad]);

	useEffect(() => {
		if (!lastPlaceFound) {
			return;
		}
		checkForAchievements();

	}, [lastPlaceFound]);

	const updateStatus = (place : number, newStatus : number) => {
		const newObject = { ...placeStatusObject };
		newObject[place] = newStatus;
		setPlaceStatusObject( oldObject => {
			const newObject = { ...oldObject };
			newObject[place] = newStatus;
			if (newStatus === PlaceStatus.Solved) {
				setLastPlaceFound(place);
			}
			return newObject;
		} );
	}

	const addAchievement = (achievement : number) => {
		setMyAchievements(myOldAchievements => myOldAchievements.includes(achievement) ? myOldAchievements : [...myOldAchievements, achievement]);
	}

	const checkForAchievements = ( props? : {pso? : PlaceStatusObject, noNotification?: boolean}) => {
		const pso = props && props.pso ? props.pso : placeStatusObject;
		const numberOfPlacesSolved = Object.keys(placeStatusObject).filter(el => pso[Number(el)] === PlaceStatus.Solved ).length;
		const numberOfKeysFound = places.filter(el => el.rewardType === 'key' && pso[el.id] === PlaceStatus.Solved).length;
	
		achievements.forEach((el, index) => {
			if (myAchievements.includes(index)) {
				return;
			}
			
			let progress = 0;
			if (el.type === 'placeCount') {
				progress = numberOfPlacesSolved / el.count;
			}
			else if (el.type === 'keyCount') {
				progress = numberOfKeysFound / el.count;
			}
			else if (el.type === 'placeList') {
				progress = el.placeList.filter(el => placeStatusObject[el] === PlaceStatus.Solved).length / el.placeList.length;
			}
			if (progress < 1) {
				return;
			}
	
			if (!props?.noNotification) {
				addNotificationToQueue(<Achievement achievement={el} />);
			}
			addAchievement(index);
		});
	}
	
	const value : GameContextType = {
		city: city,
		setCity: setCity,
		validCities: validCities,
		placeStatusObject: placeStatusObject,
		updateStatus: updateStatus,
		addAchievement: addAchievement,
		places : places,
		achievements : achievements,
		myAchievements: myAchievements,
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
	achievements : AchievementType[],
	addAchievement : (achievement : number) => void,
	myAchievements : number[],
}

export const useGame = () => useContext(GameContext);