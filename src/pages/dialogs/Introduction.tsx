import { useGame } from "../../contexts/GameContext";

const Introduction = () => {
	const { city } = useGame();
	return (<>
		<h2>Kaller alle eventyragenter!</h2>
		<p>Våren 2024 ble den kjente røverbandehøvdingen Wolfgang Wahl arrestert, mistenkt for å stå bak hundrevis av større ran av gull og edelstener over hele Norge. Vi er helt sikre på at han er skyldig, men vi har ikke klart å finne ut hvor han har gjemt tyvegodset.</p>
		<p> Etter å ha avhørt medlemmene av banden hans, er vi sikre på at tyvegodset befinner seg i et skjult skattkammer som ligger et hemmelig sted i {city}. Men selv om vi klarer å finne dette skattkammeret, er det låst. Det finnes fem nøkler til dette, som bandemedlemmene har gjemt rundt omkring i byen, og vi trenger minst tre av disse for å klare å åpne skattekammeret.</p>
		<p>Kan du hjelpe oss med å finne disse nøklene?</p>
		<p>Hvert medlem av røverbanden hadde en ledetråd på seg da de ble arrestert. Om våre teorier stemmer, leder hver av disse ledetrådene til en ny ledetråd, som leder til en ny ledetråd, og så videre til du finner en ledetråd som leder til et sted hvor en av nøklene er gjemt.</p>
		<p>De fem første ledetrådene er lagt inn i appen din, som har analysert dem og kan gi deg et anslag om hvor langt unna stedene de leder til er. Du kan løse disse ledetrådene i akkurat den rekkefølgen du vil. Mens du gjør dette, jobber vi videre med å prøve å finne ut hvor skattkammeret befinner seg.</p>
		<p>Lykke til!</p>

	</>)
}

export default Introduction;