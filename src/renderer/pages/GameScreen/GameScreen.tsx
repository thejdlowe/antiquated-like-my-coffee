import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../../appContext';
import { whichControllerIsWhich } from '../../consts';
import { Container, Box, LinearProgress } from '@mui/material';
import { PlayerColumn } from './components';
import { data } from '../../data';

export const GameScreen = () => {
	const timerRef = useRef<number | null>();
	const { round } = useParams();
	let playerData;
	if (round === '1') {
		playerData = data.show.Round1;
	} else if (round === '2') {
		playerData = data.show.Round2;
	} else if (round === '3') {
		playerData = data.show.Round3;
	}
	const maxTimeRemaining = 60 * 10; //Ten minutes
	const [timeRemaining, setTimeRemaining] = useState(0);
	const [gameRunning, setGameRunning] = useState(true);
	const [canAcceptAnswers, setCanAcceptAnswers] = useState(true);
	const [playerAnswering, setPlayerAnswering] = useState<number | null>(null);
	const [playerOneScore, setPlayerOneScore] = useState<number>(0);
	const [playerTwoScore, setPlayerTwoScore] = useState<number>(0);
	const [playerThreeScore, setPlayerThreeScore] = useState<number>(0);

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
	useEffect(() => {
		if (buttonPressed) {
			if (canAcceptAnswers) {
				if (
					buttonPressed.whichController !==
					whichControllerIsWhich.HOST
				) {
					setCanAcceptAnswers(false);
					setPlayerAnswering(buttonPressed.whichController);
				}
			} else {
				if (
					buttonPressed.whichController ===
					whichControllerIsWhich.HOST
				) {
					setCanAcceptAnswers(true);
					setPlayerAnswering(null);
				}
			}
		}
	}, [buttonPressed, canAcceptAnswers]);
	return (
		<Container maxWidth={false} sx={{ position: 'relative' }}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-evenly',
					width: '100%',
					height: '70vh',
				}}
			>
				<PlayerColumn
					playerNum={1}
					playerName={playerData ? playerData[0].displayName : ''}
					pronouns={playerData ? playerData[0].pronouns : ''}
					backgroundColor="green"
					score={playerOneScore}
					isActive={
						playerAnswering === whichControllerIsWhich.PLAYER_ONE
					}
				/>
				<PlayerColumn
					playerNum={2}
					playerName={playerData ? playerData[1].displayName : ''}
					pronouns={playerData ? playerData[1].pronouns : ''}
					backgroundColor="red"
					score={playerTwoScore}
					isActive={
						playerAnswering === whichControllerIsWhich.PLAYER_TWO
					}
				/>
				<PlayerColumn
					playerNum={3}
					playerName={playerData ? playerData[2].displayName : ''}
					pronouns={playerData ? playerData[2].pronouns : ''}
					backgroundColor="yellow"
					score={playerThreeScore}
					isActive={
						playerAnswering === whichControllerIsWhich.PLAYER_THREE
					}
				/>
			</Box>
			<Box>
				<div>
					Is Game Running: {gameRunning + ''}
					<br />
					Round: {round}
					<br />
					Can accept: {canAcceptAnswers + ''}
					<br />
					Who Is Talking: {playerAnswering + ''}
					<br />
					Time Remaining: {parseTimer()}
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
