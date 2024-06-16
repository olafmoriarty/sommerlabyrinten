const Privacy = () => {

	return (
		<main className="text-box">
			<h1>Personvern</h1>
			<p>Denne personvernerklæringen ble sist oppdatert 10. juni 2024.</p>
			<p>Behandlingsansvarlig for personopplysningen på denne nettsiden/appen er Solstrand Publishing, org.nr. 986 012 559.</p>
			<h2>Posisjon</h2>
			<p>Sommerlabyrinten bruker posisjonsdata for å vite hvor du befinner deg, som er nødvendig for å beregne avstanden til de forskjellige stedene i spillet og for å vite om du befinner deg på ett av disse stedene.</p>
			<p>Behandlingsgrunnlaget for dette formålet er <strong>samtykke</strong> - ingen posisjonsdata brukes eller etterspørres før du velger å starte spillet fra startskjermen.</p>
			<p>Lokasjonsdataene som benyttes i appen, blir aldri sendt til en server, men brukes kun internt på telefonen din. (Det er ett unntak fra denne regelen: Sommerlabyrinten bruker API-et til <a href="https://om.entur.no/personvern/" target="_blank">Entur</a> for å gi deg forslag til kollektivreiserute til stedet du ønsker å besøke. Når du trykker på knappen «Foreslå reiserute», blir din nåværende lokasjon sendt til Entur, som benytter den for å beregne hvordan du kommer deg fra stedet du er til stedet du ønsker å besøke. Men den blir ikke sendt til meg.)</p>
			<p>På enheten din ligger det lagret en liste over hvilke av stedene i spillet du har besøkt. Denne listen blir <strong>aldri</strong> delt med noen eller sendt til noen, heller ikke til meg. Man må ha tilgang til den fysiske enheten din for å kunne finne denne.</p>
			<h2>Statistikk/webanalyse</h2>
			<p>Webtjeneren Sommerlabyrinten ligger på har en tilgangslogg. Når du går inn på nettsiden, blir din IP-adresse og informasjon om hvilken nettleser du bruker («USER_AGENT»-headeren) lagret i denne loggen sammen med dato og klokkeslett, URL-en du er inne på og eventuelt hvilken nettside du kom til Sommerlabyrinten fra.</p>
			<p>Behandlingsgrunnlaget for denne behandlingen er <strong>berettiget interesse</strong> - dette er en helt essensiell innsamling av opplysninger som i praksis gjøres av alle nettsider du besøker, og den kan benyttes til å hindre misbruk av tjeneren.</p>
			<h2>Tredjeparter</h2>
			<p>Som nevnt over bruker Sommerlabyrinten API-et til <a href="https://om.entur.no/personvern/" target="_blank">Entur</a> for å gi deg forslag til kollektivreiserute til stedet du ønsker å besøke. Når du trykker på knappen «Foreslå reiserute», blir din nåværende lokasjon sendt til Entur, som benytter den for å beregne hvordan du kommer deg fra stedet du er til stedet du ønsker å besøke. Behandlingsgrunnlaget for denne behandlingen er <strong>samtykke</strong>.</p>
			<p>Dersom du velger å joine Sommerlabyrintens Discord-server, gjelder <a href="https://discord.com/privacy" target="_blank">Discords personvernretningslinjer</a>.</p>
			<h2>E-postkontakt</h2>
			<p>På hjelpesiden oppfordres du til å sende en e-post til <em>olafmoriarty@gmail.com</em> dersom du har andre spørsmål eller tilbakemeldinger enn de som er besvart der. Når du sender en e-post, blir e-posten din lagret (ikke-anonymisert) i en gmail-postboks, og som hovedregel vil disse e-postene ikke bli slettet. Grunnlaget for dette er <strong>berettiget interesse</strong> i å kunne yte bedre service dersom du stiller oppfølgingsspørsmål. Dersom du ønsker det, kan du sende en e-post til samme adresse og be om at alle e-poster fra deg blir slettet.</p>
			<h2>Andre personopplysninger</h2>
			<p>Utover det som er nevnt over, benytter Sommerlabyrinten ingen personopplysninger.</p>
			<p>Ved utvikling av ny funksjonalitet kan dette endre seg, og da vil denne personvernerklæringen bli oppdatert med revidert informasjon.</p>
			<h1>Informasjonskapsler</h1>
			<p>Tjeneren lagrer ingen informasjonskapsler om deg, og det benyttes heller ingen tredjeparts informasjonskapsler.</p>
			<p>Informasjon om hvilke steder du har oppdaget/besøkt i spillet og hvilke utmerkelser du har vunnet, lagres i <em>localStorage</em> i nettleseren din. Denne lagringen er essensiell for at framdriften din i spillet skal lagres dersom du oppdaterer nettsiden.</p>
		</main>
	);
}

export default Privacy;