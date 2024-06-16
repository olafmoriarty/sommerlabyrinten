import { AchievementType } from "../../types/types";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";

const Achievement = (props : {achievement : AchievementType}) => {
	const {achievement} = props;
	const [shareObject, setShareObject] = useState(undefined as undefined|ShareData);
	const [shareError, setShareError] = useState(false);

	useEffect(() => {
		const src = `./images/achievements/${achievement.image}`;
			fetch(src)
			.then(res => res.blob())
			.then((blob) => {
				console.log(blob);
				const image = new File([blob], src, {type: blob.type});
				const data = {
					url: 'https://sommerlabyrinten.no',
					title: `Jeg har vunnet utmerkelsen «${achievement.name}» i Sommerlabyrinten!`,
					text: `Jeg har vunnet utmerkelsen «${achievement.name}» (${achievement.desc}) på Sommerlabyrinten.no! Woohoo!`,
					files: [image],
				}				
				if (navigator.canShare(data)) {
					setShareObject(data);
				}
			});
	}, []);

	return (
		<>
			<p><strong>Du har vunnet en utmerkelse!</strong></p>
			<h2>{achievement.name}</h2>
			<p><em>{achievement.desc}</em></p>
			<img src={`./images/achievements/${achievement.image}`} alt={achievement.name} className="achievement-dialog-image" />
			<p>Du finner alle utmerkelsene dine på «Utmerkelser»-menyen.</p>
			{shareObject ? <p><button className="share-button" onClick={() => {
				navigator.share(shareObject).catch(error => {
					console.log(error);
					setShareObject(undefined);
					setShareError(true);
				});
			}}><Icon icon={faShareNodes} /> Del</button></p> : null}
			{shareError ? <p>En feil oppstod. Klarte ikke å dele utmerkelsen.</p> : null}
		</>
	)
}

export default Achievement;