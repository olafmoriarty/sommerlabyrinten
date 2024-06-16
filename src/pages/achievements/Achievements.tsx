import ProgressBar from "../../components/ProgressBar";
import { useGame } from "../../contexts/GameContext";
import { PlaceStatus } from "../../types/enums";
import Stats from "../game/Stats";

const Achievements = () => {
	const {places, achievements, placeStatusObject} = useGame();
	const numberOfPlacesSolved = Object.keys(placeStatusObject).filter(el => placeStatusObject[Number(el)] === PlaceStatus.Solved ).length;
	const numberOfKeysFound = places.filter(el => el.rewardType === 'key' && placeStatusObject[el.id] === PlaceStatus.Solved).length;
	const getLevel = (points : number) => {
		let leftToCalculate = points;
		let level = 1;

		while (leftToCalculate >= level) {
			leftToCalculate -= level;
			level++;
		}
		return level;
	};
	const currentLevel = getLevel(numberOfPlacesSolved);

	return (
		<main className="achievements-page">
			<h1>Utmerkelser</h1>
			<p className="current-level">Level {currentLevel}</p>
			<Stats />
			{achievements.map((el, index) => {
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
				if (progress > 1) {
					progress = 1;
				}
				return {
					index: index, 
					achievement: el, 
					progress: progress,
				}
			}).sort((a, b) => {
				if (a.progress < b.progress) {
					return 1;
				}
				if (a.progress > b.progress) {
					return -1;
				}
				return 0;
			}).map(el => <article className={`achievement ${el.progress < 1 ? 'unsolved' : ''}`} key={el.index}>
				{el.progress >= 1 ? 
					<img src={`./images/achievements/${el.achievement.image}`} alt={el.achievement.name} className="achievement-icon" />
				 : null}
				<div className="achievement-body">
					<h2>{el.achievement.name}</h2>
					<p className="achievement-desc">{el.achievement.desc}</p>
					{el.progress > 0 && el.progress < 1 ? <ProgressBar progress={el.progress} /> : null}
				</div>
			</article>) }
		</main>
	);
}

export default Achievements;