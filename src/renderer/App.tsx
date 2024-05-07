import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import {
	GameScreen,
	ShutdownScreen,
	TitleScreen,
	ScreenSaverScreen,
} from './pages';
import { AppContextProvider } from './appContext';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { Radio } from './media/RadioCanadaBig-VariableFont_wght.ttf';

const theme = createTheme({
	typography: {
		fontFamily: 'Radio',
		h1: {
			fontSize: `6.4rem`,
		},
		h2: {
			fontSize: `5.4rem`,
		},
		h3: {
			fontSize: `4.4rem`,
		},
		h4: {
			fontSize: `3.4rem`,
		},
		h5: {
			fontSize: `2.4rem`,
		},
		h6: {
			fontSize: `1.4rem`,
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
				@font-face {
					font-family: 'Radio';
					src: url(${Radio}) format=('truetype');
				}
			`,
		},
	},
});

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
					</Routes>
				</AppContextProvider>
			</ThemeProvider>
		</Router>
	);
}
