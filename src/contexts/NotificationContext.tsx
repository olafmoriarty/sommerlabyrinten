import { createContext, useContext, useEffect, useState, useRef } from "react";

const NotificationContext = createContext({} as NotificationContextType);

export const NotificationProvider = (props : { children : JSX.Element|JSX.Element[] }) => {

	const [notifications, setNotifications] = useState([] as JSX.Element[]);
	const [isClosing, setIsClosing] = useState(false);

	const dialogRef = useRef<HTMLDialogElement>(null);
	useEffect(() => {
		if (notifications.length) {
			dialogRef.current?.showModal();
			if (dialogRef.current) {
				console.log('Test');
				dialogRef.current.firstElementChild?.scrollIntoView(true);
			}
			setIsClosing(false);
		}
	}, [notifications]);

	const addNotificationToQueue = (notification : JSX.Element) => {
		setNotifications(oldValue => [ ...oldValue, notification ]);
	}

	const closeDialog = () => {
		setIsClosing(true);
		setTimeout(() => {
			dialogRef.current?.close();
			setNotifications(oldValue => oldValue.slice(1));
		}, 500);
	}

	const value : NotificationContextType = {
		addNotificationToQueue: addNotificationToQueue,
	};

	return (
		<NotificationContext.Provider value={value}>
			{props.children}
			<dialog className={`game-dialog${isClosing ? ' is-closing' : ''}`} ref={dialogRef} key={JSON.stringify(notifications[0])}>
				{notifications.length ? <>
					{notifications[0]}
					<button className="close-dialog-button" onClick={closeDialog}>Lukk vindu</button>
				</> : null}
			</dialog>
		</NotificationContext.Provider>
	)
}

type NotificationContextType = {
	addNotificationToQueue : (notification : JSX.Element) => void,
}

export const useNotifications = () => useContext(NotificationContext);