import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../appContext';
import { whichControllerIsWhich, buttonsToWhichRound } from '../../consts';

export const StartScreen = () => {
	const { buttonPressed } = useAppContext();
	const navigate = useNavigate();
	useEffect(() => {
		if (
			buttonPressed &&
			buttonPressed.whichController == whichControllerIsWhich.HOST &&
			(buttonPressed.AButton ||
				buttonPressed.BButton ||
				buttonPressed.XButton ||
				buttonPressed.YButton)
		) {
			let id = 'broken';
			if (buttonPressed.AButton) id = buttonsToWhichRound.A_BUTTON + '';
			if (buttonPressed.BButton) id = buttonsToWhichRound.B_BUTTON + '';
			if (buttonPressed.XButton) id = buttonsToWhichRound.X_BUTTON + '';
			if (buttonPressed.YButton) id = buttonsToWhichRound.Y_BUTTON + '';
			navigate(`/game/:${id}`);
		}
	}, [buttonPressed, navigate]);
	return (
		<>
			<div>TITLE SCREEN</div>
		</>
	);
};
