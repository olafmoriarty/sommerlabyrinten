import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Content from './pages/game/Game';
import Navigation from './components/Navigation';
import { GameProvider } from './contexts/GameContext';
import './styles/style.css';
import { NotificationProvider } from './contexts/NotificationContext';
import The404Page from './pages/404';
import Settings from './pages/settings/Settings';
import Help from './pages/help/Help';

const router = createBrowserRouter([
	{ element: <Root />, children: [
		{path: '/innstillinger', element: <Settings />},
		{path: '/hjelp', element: <Help />},
		{path: '/', element: <Content />},
		{path: '*', element: <The404Page />},
	] },
]);

const App = () => <RouterProvider router={router} />

function Root() {

	return (
			<GameProvider>
				<NotificationProvider>
					<Outlet />
					<Navigation />
				</NotificationProvider>
			</GameProvider>
	)
}

export default App;