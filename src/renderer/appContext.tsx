import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppContextProviderProps {
	children?: React.ReactNode | React.ReactNode[];
}

const AppContext = createContext({});

type ShowStates = 'beginning' | 'active' | 'shutdown';

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
	children,
}) => {
	const [showState, setShowState] = useState<ShowStates>('beginning');
	const [buttonPressed, setButtonPressed] = useState({});

	useEffect(() => {
		window.electronAPI.onButtonUpdate((value) => {
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
		console.log(buttonPressed);
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
