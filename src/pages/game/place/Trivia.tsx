import { useState } from "react";
import { TriviaQuestion } from "../../../types/types";
import ProgressBar from "../../../components/ProgressBar";
import { useGame } from "../../../contexts/GameContext";
import { PlaceStatus } from "../../../types/enums";
import { useNotifications } from "../../../contexts/NotificationContext";
import YouFoundAClue from "../../dialogs/YouFoundAClue";
import YouFoundAKey from "../../dialogs/YouFoundAKey";
import TreasureFound from "../../dialogs/TreasureFound";

const Trivia = (props : {
	id : number,
	questions : TriviaQuestion[],
	rewardType : string,
	rewardId? : number,
}) => {
	const { updateStatus } = useGame();
	const { addNotificationToQueue } = useNotifications();

	const [questions, setQuestions] = useState(props.questions);
	const [currentIsClicked, setCurrentIsClicked] = useState(undefined as number|undefined);

	const answerQuestion = (correct : boolean) => {
		let newQuestions = [ ...questions ];
		if (correct) {
			newQuestions = newQuestions.slice(1);			
		}
		else {
			newQuestions = newQuestions.slice(1).concat(newQuestions.slice(0, 1));
		}

		setTimeout(() => {
			setQuestions(newQuestions);
			setCurrentIsClicked(undefined);

			if (newQuestions.length === 0) {
				console.log(props);
				if (props.rewardType === 'clue' && props.rewardId) {
					updateStatus(props.rewardId, PlaceStatus.Unread);
				}
				updateStatus(props.id, PlaceStatus.Solved);
				if (props.rewardType === 'clue') {
					addNotificationToQueue(<YouFoundAClue />);			
				}
				if (props.rewardType === 'key') {
					addNotificationToQueue(<YouFoundAKey />);			
				}
				if (props.rewardType === 'treasure') {
					addNotificationToQueue(<TreasureFound />);			
				}

			}
		}, 500);

	}

	return (
		<section className={`trivia${currentIsClicked !== undefined ? ' is-clicked' : ''}`}>
			<ProgressBar 
				progress={(props.questions.length - questions.length) / props.questions.length} 
				blinking={1 / props.questions.length}
			/>
			<div className={"question"}>{questions[0].question}</div>
			{questions[0].options.map((el, index) => {return {el: el, index: index}}).sort((a, b) => a.el < b.el ? -1 : 1).map((el) => <button onClick={() => {
				if (currentIsClicked) {
					return;
				}
				answerQuestion(el.index === 0);
				setCurrentIsClicked(el.index);
			}} key={el.el} className={currentIsClicked === el.index ? (el.index === 0 ? 'clicked-correct' : 'clicked-wrong') : ""}>{el.el}</button>)}
		</section>
	)
}

export default Trivia;