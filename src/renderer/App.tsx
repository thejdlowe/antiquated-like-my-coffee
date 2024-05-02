import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { StartScreen, GameScreen, ShutdownScreen } from './pages';
import { AppContextProvider } from './appContext';

export default function App() {
	return (
		<Router>
			<AppContextProvider>
				<Routes>
					<Route path="/" element={<StartScreen />} />
					<Route path="/game" element={<GameScreen />} />
					<Route path="/shutdown" element={<ShutdownScreen />} />
				</Routes>
			</AppContextProvider>
		</Router>
	);
}
