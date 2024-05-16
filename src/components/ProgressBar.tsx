const ProgressBar = (props : { progress : number, blinking? : number }) => {
	return (
		<div className="progress-bar">
			<div className="progress" style={{ width: `calc( ${props.progress} * 100% )` }} />
			{props.blinking ? 
				<div className="progress blinking" style={{ width: `calc( ${props.blinking} * 100% )` }} />
			: null}
		</div>
	)
}

export default ProgressBar;