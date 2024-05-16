import { Link } from "react-router-dom";

const The404Page = () => {
	return (<main className="text-box">
		<h1>Siden ble ikke funnet</h1>
		<p>Siden du leter etter ble ikke funnet i Sommerlabyrinten. Kanskje den har gått seg bort?</p>
		<p><Link to='/'>Gå tilbake til startsiden</Link></p>
	</main>);
}

export default The404Page;