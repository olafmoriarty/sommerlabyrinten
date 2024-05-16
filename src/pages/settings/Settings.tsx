import { useNavigate } from "react-router-dom";
import { useGame } from "../../contexts/GameContext";

const Settings = () => {
	const { city, setCity } = useGame();
	const navigate = useNavigate();

	return (
		<main className="settings text-box">
			<h1>Innstillinger</h1>

			<section className="content-box">
				<h2>Valgt by</h2>
				<p>Din by: <strong>{city ? city : 'Ikke valgt'}</strong></p>
				{city ?
					<button onClick={() => {
						setCity(undefined);
						navigate("/");
					}}>Endre by</button>
				: null}
			</section>

			<section className="content-box">
				<h2>Vis på toppliste</h2>
				<p>Ønsker du å sende inn navn og poengsum til Sommerlabyrinten-databasen, slik at du kan havne på topplista og sammenligne deg med andre spillere?</p>
			</section>

			<section className="content-box">
				<h2>Venneliste</h2>
				<p>Du har lagt til 0 venner.</p>
				<button>Slett venner</button>
				<p>0 personer har lagt til deg på din venneliste.</p>
				<button>Vis liste</button>
			</section>

			<section className="content-box">
				<h2>Slett data</h2>
			</section>
		</main>
	)
}

export default Settings;