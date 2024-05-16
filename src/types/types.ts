export type CityType = string|undefined;

export type Direction = 'N'|'S'|'E'|'W'|'NW'|'NE'|'SW'|'SE';

export type PlaceStatusObject = {[key : number] : number};

export type PlaceType = {
	id : number,
	name : string,
	lat : number,
	long : number,
	title : string,
	desc : string,
	solvedDesc : string,
	questions : TriviaQuestion[],
	rewardType : 'key'|'string',
	rewardId? : number
}

export type Position = { latitude : number, longitude : number };

export type TriviaQuestion = {
	question : string,
	options : string[],
}