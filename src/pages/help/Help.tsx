import { Link } from "react-router-dom";
import HelpSection from "./HelpSection";

const Help = () => {
	return (
		<main className="text-box help-page">
			<h1>Hjelp!</h1>

			<HelpSection>
				<h2>Hvordan spiller jeg Sommerlabyrinten?</h2>
				<p>Når du starter spillet og tillater appen å bruke GPS-posisjonen din, får du opp en liste over fem spor. Hvert spor består av en kryptisk setning som leder til et sted. I tillegg får du vite avstanden til dette stedet i meter fra der du befinner deg akkurat nå, og du kan trykke på en knapp for å få et tips om hvordan du kan reise kollektivt til dette stedet.</p>
				<p>For å komme videre i spillet, må du ta med deg telefonen og reise til disse stedene. Det betyr at du enten må finne ut hvor de er, eller legge ut på oppdagelsesferd og prøve å finne dem.</p>
				<p>Når du kommer fram til et av stedene som sporene fører til, kan du begynne å lete etter neste spor. For å lete etter spor, må du svare på tre spørsmål som har noe å gjøre med stedet du er på. Hvert spørsmål har tre alternativer. Hvis du svarer feil, får du prøve på nytt så mange ganger du vil.</p>
				<p>De fleste av stedene du kommer til inneholder et nytt spor som leder til et nytt sted, som blir automatisk lagt til i lista di. Men fem av stedene du kommer til inneholder en nøkkel. Når du har funnet tre nøkler, får du et nytt hint - om stedet hvor skattkammeret befinner seg.</p>
				<p>Finn skattkammeret på samme måte som de andre stedene i spillet. Når du kommer fram til skattkammeret, må du svare på ti spørsmål om byen, og når du har gjort dette har du vunnet Sommerlabyrinten!</p>
			</HelpSection>

			<HelpSection>
				<h2>Hvem er målgruppen for Sommerlabyrinten?</h2>
				<p>Sommerlabyrinten er laget for alle som har lyst til å få et intensiv til å utforske byen på en ny måte, og kan spilles av alle som befinner seg i Oslo, har en mobiltelefon og har mulighet og lyst til å reise rundt i byen i sommer for å finne digitale spor.</p>
				<p>Alle steder i spillet skal være relativt nært kollektivtrafikk i sone 1, og jeg <em>tror</em> at alle stedene er tilgjengelige for rullestolbrukere.</p>
				<p>Sommerlabyrinten er laget for å være familievennlig, og litt av tanken er at dette skal kunne være en gøy aktivitet å bruke sommeren på dersom man ikke skal reise på ferie - samtidig som jeg håper at dette kan være relativt underholdende for voksne som spiller uten barn også.</p>
			</HelpSection>

			<HelpSection>
				<h2>Hvor mange steder er det i Sommerlabyrinten? Hvor mange steder må jeg besøke for å finne skattkammeret?</h2>
				<p>Labyrinten består av <strong>36</strong> steder rundt omkring i Oslo. For å «vinne» spillet må du besøke minst 22 av dem, men sannsynligvis kommer du til å besøke flere.</p>
				<p>Fem av stedene i spillet inneholder «nøkler», og du trenger tre av disse nøklene for å finne skattkammeret. Hver nøkkel befinner seg på enden av et rebusløp som består av sju spor. Det betyr at det absolutt minste antallet steder du må besøke for å åpne skattkammeret er tre ganger sju, pluss selve skattkammeret, som er sted nummer 22.</p>
			</HelpSection>

			<HelpSection>
				<h2>Er det noen premie?</h2>
				<p>Nei. Dette er kun for moro skyld.</p>
				<p>(Du har lov til å kjøpe en premie til deg selv, da. Eller til den/de du spiller sammen med, om du gjør sånt.)</p>
			</HelpSection>

			<HelpSection>
				<h2>Er det mulig å spille Sommerlabyrinten i andre byer enn Oslo?</h2>
				<p>Foreløpig ikke. Jeg hadde håpa å få til en variant for Bergen (og hadde veldig lyst på Trondheim også), men det gikk veldig mye jobb inn i å lage dette spillet med bare en by, og jeg er bare en person, så det var dessverre det jeg rakk.</p>
			</HelpSection>

			<HelpSection>
				<h2>Kommer det en ny runde med Sommerlabyrinten i 2025?</h2>
				<p>Det vet jeg ikke ennå. Vi får se hvor populær 2024-varianten blir.</p>
			</HelpSection>

			<HelpSection>
				<h2>Hvem har laget Sommerlabyrinten?</h2>
				<p>Sommerlabyrinten er utvikla av <a href="https://olafmoriarty.com" target="_blank">Olaf Moriarty Solstrand</a>. Formelt sett er det firmaet mitt, Solstrand Publishing, som står som eier av nettstedet.</p>
				<h3>Tips til steder</h3>
				<p>Takk til Andrea, Jonas, Kevin, Knut, Knut, Kristin Cecilia, Leif, Mona, Sigvat og Vetle (og et par anonyme bidragsytere) for innspill til hvilke steder som skulle være med i Sommerlabyrinten.</p>
				<h3>Bilder</h3>
				<ul>
				<li><a href="https://www.shutterstock.com/image-photo/vintage-paper-background-old-envelope-postcard-2345197067" target="_blank">DarkBird, Shutterstock.com</a></li>
				<li><a href="https://www.shutterstock.com/image-photo/golden-skeleton-key-isolated-on-white-126947111">Jules_Kitano, Shutterstock.com</a></li>
				<li><a href="https://www.shutterstock.com/image-illustration/treasury-hall-treasure-trove-gold-coins-2353228151">ridersuperone, ShutterStock.com</a></li>
				</ul>
				<h3>Ikoner</h3>
				<ul>
					<li>Ikoner brukt i utmerkelser: <a href="https://freepik.com" target="_blank">FreePik</a></li>
					<li>Andre ikoner: <a href="https://fontawesome.com">FontAwesome</a></li>
				</ul>
				<h3>API-er</h3>
				<p>Sommerlabyrinten benytter API-en til <a href="https://developer.entur.org">EnTur</a> for å tilby reiseruteforslag.</p>
			</HelpSection>

			<HelpSection>
				<h2>Hvordan behandler Sommerlabyrinten personopplysningene mine?</h2>
				<p><Link to="/personvern">Personvernerklæring</Link></p>
			</HelpSection>

			<HelpSection>
				<h2>Jeg har funnet en feil, eller lurer på noe som ikke er besvart på denne siden?</h2>
				<p>Send en e-post til <a href="mailto:olafmoriarty@gmail.com">olafmoriarty@gmail.com</a>, så svarer jeg deg så raskt jeg kan.</p>
				<p>Se <Link to="/personvern">personvernerklæringen</Link> for å lese hvordan jeg behandler e-post.</p>
			</HelpSection>

		</main>
	);
}

export default Help;