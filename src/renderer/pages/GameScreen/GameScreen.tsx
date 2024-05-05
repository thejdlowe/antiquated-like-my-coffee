import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../../appContext';
import { whichControllerIsWhich } from '../../consts';
import { Container, Box, LinearProgress } from '@mui/material';

export const GameScreen = () => {
	const timerRef = useRef<number | null>();
	const { round } = useParams();
	const maxTimeRemaining = 60 * 10; //Ten minutes
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
		console.log('Timer updated');
	};
	useEffect(() => {
		setTimeRemaining(maxTimeRemaining);
		setGameRunning(true);
		const timerID = window.setInterval(() => {
			updateTimer();
		}, 1000);
		timerRef.current = timerID;
		return () => {
			window.clearInterval(timerRef.current || 0);
		};
	}, []);

	const { buttonPressed } = useAppContext();
	const navigate = useNavigate();
	useEffect(() => {
		if (
			buttonPressed &&
			buttonPressed.whichController == whichControllerIsWhich.HOST &&
			buttonPressed.XboxButton
		) {
			navigate('/');
		}
	}, [buttonPressed, navigate]);
	return (
		<Container maxWidth={false}>
			<Box>
				<div>
					WE ON GAME SCREEN {parseTimer()} {gameRunning + ''} {round}
				</div>
			</Box>
			<Box>
				<LinearProgress
					variant="determinate"
					value={(timeRemaining / maxTimeRemaining) * 100}
				/>
			</Box>
		</Container>
	);
};
