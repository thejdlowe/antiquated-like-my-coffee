import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import {
	GameScreen,
	ShutdownScreen,
	TitleScreen,
	ScreenSaverScreen,
	FinalRoundScreen,
} from './pages';
import { AppContextProvider } from './appContext';
import {
	createTheme,
	responsiveFontSizes,
	ThemeProvider,
	CssBaseline,
} from '@mui/material';
import Radio from './media/RadioCanadaBig-VariableFont_wght.ttf';
//import './App.css';

let theme = createTheme({
	typography: {
		fontFamily: '"Radio Canada Big Bold"',
	},
	// components: {
	// 	MuiCssBaseline: {
	// 		styleOverrides: `
	// 			@font-face {
	// 				font-family: 'Radio';
	// 				src: url(${Radio}) format=('truetype');
	// 			}
	// 		`,
	// 	},
	// },
});
theme = responsiveFontSizes(theme);

export default function App() {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<AppContextProvider>
					<Routes>
						<Route path="/" element={<TitleScreen />} />
						<Route
							path="/screensaver"
							element={<ScreenSaverScreen />}
						/>
						<Route path="/game/:round" element={<GameScreen />} />
						<Route path="/shutdown" element={<ShutdownScreen />} />
						<Route
							path="/finalRound"
							element={<FinalRoundScreen />}
						/>
					</Routes>
				</AppContextProvider>
			</ThemeProvider>
		</Router>
	);
}
