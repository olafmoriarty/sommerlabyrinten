import HelpSection from "./HelpSection";

const Help = () => {
	return (
		<main className="text-box help-page">
			<h1>Hjelp!</h1>

			<HelpSection>
				<h2>Hvem har laget Sommerlabyrinten?</h2>
				<p>Sommerlabyrinten er utvikla av <a href="https://olafmoriarty.com" target="_blank">Olaf Moriarty Solstrand</a>.</p>
				<h3>Tips til steder</h3>
				<p>Takk til Andrea, Jonas, Kevin, Knut, Knut, Kristin Cecilia, Leif, Mona, Sigvat og Vetle for innspill til hvilke steder som skulle være med i Sommerlabyrinten.</p>
				<h3>Bilder</h3>
				<p><a href="https://www.shutterstock.com/image-photo/vintage-paper-background-old-envelope-postcard-2345197067" target="_blank">DarkBird, Shutterstock.com</a></p>
				<p><a href="https://www.shutterstock.com/image-photo/golden-skeleton-key-isolated-on-white-126947111">Jules_Kitano, Shutterstock.com</a></p>
			</HelpSection>
		</main>
	);
}

export default Help;