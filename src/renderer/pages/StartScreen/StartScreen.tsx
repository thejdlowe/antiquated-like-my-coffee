import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../appContext';
import { whichControllerIsWhich } from '../../consts';

export const StartScreen = () => {
	const { buttonPressed } = useAppContext();
	const navigate = useNavigate();
	useEffect(() => {
		if (
			buttonPressed &&
			buttonPressed.whichController == whichControllerIsWhich.HOST &&
			buttonPressed.bigButton
		) {
			navigate('/game');
		}
	}, [buttonPressed, navigate]);
	return (
		<>
			<div>TITLE SCREEN</div>
		</>
	);
};
