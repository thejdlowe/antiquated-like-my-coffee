import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppContextProviderProps {
	children?: React.ReactNode | React.ReactNode[];
}

const AppContext = createContext({});

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
	const [showState, setShowState] = useState<ShowStates>('beginning');
	const [buttonPressed, setButtonPressed] = useState<{} | ButtonPressedProps>(
		{},
	);

	useEffect(() => {
		window.electronAPI.onButtonUpdate((value: ButtonPressedProps) => {
			// if (value === "ready") {
			// 	document.querySelectorAll("#P1, #P2, #P3").forEach((el) => {
			// 		el.style.backgroundColor = "white";
			// 	});
			// 	document.querySelector("#rawValue").innerHTML = "Ready";
			// } else if (["P1", "P2", "P3"].includes(value)) {
			// 	const el = document.querySelector(`#${value}`);
			// 	el.style.backgroundColor = el.dataset.background;
			// 	document.querySelector("#rawValue").innerHTML = "Not Ready";
			// }

			setButtonPressed(value);
		});
	}, []);

	useEffect(() => {
		if (showState === 'beginning') {
			//if(buttonPressed)
		}
	}, [buttonPressed, showState]);
	return (
		<AppContext.Provider value={{ showState, setShowState }}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	const value = useContext(AppContext);
	return value;
};
