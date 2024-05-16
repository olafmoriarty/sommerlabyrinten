import { Position } from "../types/types";

const getDistance = ( myPosition : Position, targetPosition : Position ) => {

	const myLatitude = myPosition.latitude * Math.PI / 180;
	const myLongitude = myPosition.longitude * Math.PI / 180;

	const targetLatitude = targetPosition.latitude * Math.PI / 180;
	const targetLongitude = targetPosition.longitude * Math.PI / 180;

	const distance = Math.acos( Math.sin(myLatitude) * Math.sin(targetLatitude) + Math.cos(myLatitude) * Math.cos(targetLatitude) * Math.cos(targetLongitude - myLongitude) ) * 6371000;

	return distance;
}

export default getDistance;