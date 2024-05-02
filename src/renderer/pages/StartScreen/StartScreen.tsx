import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../appContext';

export const StartScreen = () => {
	const { buttonPressed } = useAppContext();
	const navigate = useNavigate();
	useEffect(() => {
		if (
			buttonPressed &&
			buttonPressed.whichController == 2 &&
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
