import { Outlet, RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import Content from './pages/game/Game';
import Navigation from './components/Navigation';
import { GameProvider } from './contexts/GameContext';
import './styles/style.css';
import { NotificationProvider } from './contexts/NotificationContext';
import The404Page from './pages/404';
import Settings from './pages/settings/Settings';
import Help from './pages/help/Help';
import Privacy from './pages/privacy/Privacy';
import { useEffect } from 'react';
import Achievements from './pages/achievements/Achievements';
import Community from './pages/community/Community';

const router = createBrowserRouter([
	{ element: <Root />, children: [
		{path: '/innstillinger', element: <Settings />},
		{path: '/utmerkelser', element: <Achievements />},
		{path: '/hjelp', element: <Help />},
		{path: '/personvern', element: <Privacy />},
		{path: '/samfunn', element: <Community />},
		{path: '/', element: <Content />},
		{path: '*', element: <The404Page />},
	] },
]);

const App = () => <RouterProvider router={router} />

function Root() {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<NotificationProvider>
			<GameProvider>
				<Outlet />
				<Navigation />
			</GameProvider>
		</NotificationProvider>
	)
}

export default App;