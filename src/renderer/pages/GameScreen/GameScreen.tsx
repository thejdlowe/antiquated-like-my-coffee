import React, { useState, useCallback, useEffect, useRef } from 'react';

export const GameScreen = () => {
	const timerRef = useRef(null);
	const [timeRemaining, setTimeRemaining] = useState(0);

	const parseTimer = useCallback(() => {
		const minutes = Math.floor(timeRemaining / 60);
		const seconds = Math.floor(timeRemaining % 60);
		return [(minutes > 9 ? minutes : "0" + minutes), (seconds > 9 ? seconds : "0" + seconds)].join(":");
	}, [timeRemaining]);

	const updateTimer = () => {

	};
	useEffect(() => {

	}, []);
	return (
		<>
			<div>WE ON GAME SCREEN</div>
		</>
	);
};
