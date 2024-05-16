import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faAward, faKey, faLocationPin } from '@fortawesome/free-solid-svg-icons'

import { useGame } from "../../contexts/GameContext";
import { PlaceStatus } from "../../types/enums";

const Stats = () => {
	const { places, placeStatusObject } = useGame();
	
	const numberOfPlacesSolved = Object.keys(placeStatusObject).filter(el => placeStatusObject[Number(el)] === PlaceStatus.Solved ).length;
	const numberOfKeysFound = places.filter(el => el.rewardType === 'key' && placeStatusObject[el.id] === PlaceStatus.Solved).length;
	
	return (
		<section className="stats">
			<article>
				<p className="icon"><Icon icon={faLocationPin} /></p>
				<p>{numberOfPlacesSolved}</p>
			</article>
			<article>
				<p className="icon"><Icon icon={faKey} /></p>
				<p>{numberOfKeysFound}</p>
			</article>
			<article>
				<p className="icon"><Icon icon={faAward} /></p>
				<p>{0}</p>
			</article>
		</section>
	)
}

export default Stats;