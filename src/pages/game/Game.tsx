import { useGame } from "../../contexts/GameContext"
import PlaceList from "./PlaceList";
import Stats from "./Stats";
import TitleScreen from "./TitleScreen";

const Game = () => {
	const {city} = useGame();

	if (!city) {
		return (
			<TitleScreen />
		);
	}

	return (
		<main className="sommerlabyrinten">
			<header>
				<img src="./logo.png" alt="Sommerlabyrinten 2024" className="logo" />
			</header>
			<Stats />
			<PlaceList />
		</main>
	);
}

export default Game;