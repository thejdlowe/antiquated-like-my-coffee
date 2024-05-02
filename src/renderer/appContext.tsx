import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppContextProviderProps {
	children?: React.ReactNode | React.ReactNode[];
}

const AppContext = createContext<Record<string, ButtonPressedProps>>({
	buttonPressed: {
		whichController: 0,
		startButton: false,
		backButton: false,
		XboxButton: false,
		bigButton: false,
		AButton: false,
		BButton: false,
		XButton: false,
		YButton: false,
	},
});

type ShowStates = 'beginning' | 'active' | 'shutdown';
interface ButtonPressedProps {
	whichController: 0 | 1 | 2 | 3;
	startButton: boolean;
	backButton: boolean;
	XboxButton: boolean;
	bigButton: boolean;
	AButton: boolean;
	BButton: boolean;
	XButton: boolean;
	YButton: boolean;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
	children,
}) => {
	const [buttonPressed, setButtonPressed] = useState<ButtonPressedProps>({
		whichController: 0,
		startButton: false,
		backButton: false,
		XboxButton: false,
		bigButton: false,
		AButton: false,
		BButton: false,
		XButton: false,
		YButton: false,
	});

	useEffect(() => {
		window.electronAPI.onButtonUpdate((value: ButtonPressedProps) => {
			setButtonPressed(value);
		});
	}, []);

	// useEffect(() => {
	// 	console.log(buttonPressed);
	// 	if (showState === 'beginning') {

	// 	}
	// }, [buttonPressed, showState]);
	return (
		<AppContext.Provider value={{ buttonPressed }}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	const value = useContext(AppContext);
	return value;
};
