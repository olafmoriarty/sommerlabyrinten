import { Direction, Position } from "../types/types";

const getDirection = ( myPosition : Position, targetPosition : Position ) : Direction => {

	const latitudeDiff = targetPosition.latitude - myPosition.latitude;
	const longitudeDiff = targetPosition.longitude - myPosition.longitude;

	const angle = Math.atan(Math.abs( latitudeDiff) / (Math.abs(longitudeDiff ) || 0.00001)) * 2 / (Math.PI);

	if (angle <= .25) {
		if (longitudeDiff < 0) {
			return 'W';
		}
		return 'E';
	}

	if (angle >= .75) {
		if (latitudeDiff < 0) {
			return 'S';
		}
		return 'N';
	}

	if (latitudeDiff < 0 && longitudeDiff < 0) {
		return 'SW';
	} 

	if (latitudeDiff < 0) {
		return 'SE';
	} 

	if (longitudeDiff < 0) {
		return 'NW';
	} 

	return 'NE';
}

export default getDirection;