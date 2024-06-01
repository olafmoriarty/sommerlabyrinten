import { useGame } from "../../contexts/GameContext";

const Introduction = () => {
	const { city } = useGame();
	return (<>
		<h2>Kaller alle eventyragenter!</h2>
		<p>Vi har funnet ut at det befinner seg et hemmelig skattkammer fullt av gull og edelstener på et hemmelig sted i {city}. Vi jobber med å finne ut nøyaktig hvor dette skattekammeret befinner seg, men vi vet at for å komme inn i det, trenger vi minst tre av de fem nøklene som åpner døren. Kan du hjelpe oss med å finne dem?</p>
		<p>Skattkammeret hadde fem voktere, som har gjemt hver sin nøkkel et sted i byen. Vi har klart å finne fem ledetråder som visstnok skal føre til hver sin nøkkel. Om våre teorier stemmer, leder hver av disse ledetrådene til en ny ledetråd, som leder til en ny ledetråd, og så videre til du finner en ledetråd som leder til et sted hvor en av nøklene er gjemt.</p>
		<p>De fem første ledetrådene er lagt inn i appen din, som har analysert dem og kan gi deg et anslag om hvor langt unna stedene de leder til er. Du kan løse disse ledetrådene i akkurat den rekkefølgen du vil. Mens du gjør dette, jobber vi videre med å prøve å finne ut hvor skattkammeret befinner seg.</p>
		<p>Lykke til!</p>

	</>)
}

export default Introduction;