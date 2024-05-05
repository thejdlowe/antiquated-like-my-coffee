import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ImageScreen, GameScreen, ShutdownScreen, TitleScreen } from './pages';
import { AppContextProvider } from './appContext';

export default function App() {
	return (
		<Router>
			<AppContextProvider>
				<Routes>
					<Route path="/" element={<TitleScreen />} />
					<Route path="/game/:round" element={<GameScreen />} />
					<Route path="/shutdown" element={<ShutdownScreen />} />
				</Routes>
			</AppContextProvider>
		</Router>
	);
}
