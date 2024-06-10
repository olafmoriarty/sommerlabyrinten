import { Link } from "react-router-dom";
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
			<p className="privacy-policy-link"><Link to="/personvern">Personvernerklæring</Link></p>
		</main>
	);
}

export default Game;