import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { StartScreen, GameScreen } from './pages';
import { AppContextProvider } from './appContext';

export default function App() {
	return (
		<Router>
			<AppContextProvider>
				<Routes>
					<Route path="/" element={<StartScreen />} />
					<Route path="/game" element={<GameScreen />} />
				</Routes>
			</AppContextProvider>
		</Router>
	);
}
