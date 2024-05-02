import React, { useState, useCallback, useEffect, useRef } from 'react';

export const GameScreen = () => {
	const timerRef = useRef<number | null>();
	const [timeRemaining, setTimeRemaining] = useState(0);
	const [gameRunning, setGameRunning] = useState(false);

	const parseTimer = useCallback(() => {
		const minutes = Math.floor(timeRemaining / 60);
		const seconds = Math.floor(timeRemaining % 60);
		return [
			minutes > 9 ? minutes : '0' + minutes,
			seconds > 9 ? seconds : '0' + seconds,
		].join(':');
	}, [timeRemaining]);

	const updateTimer = () => {
		setTimeRemaining((count) => {
			if (count - 1 <= 0) {
				window.clearInterval(timerRef.current || 0);
				setGameRunning(false);
				return 0;
			}
			return count - 1;
		});
	};
	useEffect(() => {
		setTimeRemaining(60);
		setGameRunning(true);
		const timerID = window.setInterval(() => {
			updateTimer();
		}, 1000);
		timerRef.current = timerID;
		return () => {
			window.clearInterval(timerRef.current || 0);
		};
	}, []);
	return (
		<>
			<div>
				WE ON GAME SCREEN {parseTimer()} {gameRunning + ''}
			</div>
		</>
	);
};
