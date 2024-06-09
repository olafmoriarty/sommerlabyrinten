import { useState } from "react";

const HelpSection = (props : {children : JSX.Element[]}) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(open => !open);
	}

	if (!isOpen) {
		return (
			<article className="content-box collapsed" onClick={toggle}>{props.children[0]}</article>
		);
	}
	return (
		<article className="content-box">{props.children}<button onClick={toggle}>Skjul</button></article>
	);
}

export default HelpSection;