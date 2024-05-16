import { Position } from "../types/types";

const getEnturData = async ( myPosition : Position, targetPosition : Position ) => {

	const body = JSON.stringify({'query': `{
		trip(
		  from: {
			coordinates: {
			  latitude: ${myPosition.latitude}
			  longitude: ${myPosition.longitude}
			}
		  },
		  to: {
			coordinates: {
			  latitude: ${targetPosition.latitude}
			  longitude: ${targetPosition.longitude}
			}
		  }
		) {
		  tripPatterns {
			legs {
			  mode
			  line {
				publicCode
			  }
			}
		  }
		}
	  }`});

	try {
		const res = await fetch('https://api.entur.io/journey-planner/v3/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'ET-Client-Name': 'solstrand_publishing-sommerlabyrinten'
			},
			body: body,
		});
		const json = await res.json();
		return json;
	}
	catch(error) {
		return null;
	}
}

export default getEnturData