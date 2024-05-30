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
	let currentMiniGame;
	if (round === '1') {
		playerData = data.show.Round1.players;
		currentMiniGame = data.show.Round1.minigame;
	} else if (round === '2') {
		playerData = data.show.Round2.players;
		currentMiniGame = data.show.Round2.minigame;
	} else if (round === '3') {
		playerData = data.show.Round3.players;
		currentMiniGame = data.show.Round3.minigame;
	}
	const maxTimeRemaining = 60 * 0.1; //Ten minutes
	const [showMiniGame, setShowMiniGame] = useState<boolean>(false);
	const [timeRemaining, setTimeRemaining] = useState(0);
	const [progressBarColor, setProgressBarColor] = useState('green');
	const [gameRunning, setGameRunning] = useState(true);
	const [canAcceptAnswers, setCanAcceptAnswers] = useState(true);
	const [playerAnswering, setPlayerAnswering] = useState<number | null>(null);
	const [playerOneScore, setPlayerOneScore] = useState<number>(0);
	const [playerTwoScore, setPlayerTwoScore] = useState<number>(0);
	const [playerThreeScore, setPlayerThreeScore] = useState<number>(0);
	const [debugMode, setDebugMode] = useState<boolean>(false);

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

	const { buttonPressed, resetButtonPressed } = useAppContext();
	const navigate = useNavigate();

	useEffect(() => {
		if (
			buttonPressed &&
			buttonPressed.whichController === whichControllerIsWhich.HOST &&
			buttonPressed.bigButton
		) {
			if (!gameRunning && !showMiniGame) {
				setShowMiniGame(true);
				setCanAcceptAnswers(false);
			}
		}
	}, [gameRunning, buttonPressed, setShowMiniGame]);

	const [hostAllowScore, setHostAllowScore] = useState(true);

	useEffect(() => {
		if (showMiniGame) {
			if (
				buttonPressed &&
				buttonPressed.whichController === whichControllerIsWhich.HOST &&
				hostAllowScore
			) {
				let addScore = false;
				if (buttonPressed.AButton) {
					addScore = true;
					setPlayerOneScore((prev) => prev + 5);
				}
				if (buttonPressed.BButton) {
					addScore = true;
					setPlayerTwoScore((prev) => prev + 5);
				}
				if (buttonPressed.YButton) {
					addScore = true;
					setPlayerThreeScore((prev) => prev + 5);
				}
				if (addScore) {
					setHostAllowScore(false);
					resetButtonPressed();
					setTimeout(() => {
						setHostAllowScore(true);
					}, 1000);
				}
			}
		}
	}, [showMiniGame, buttonPressed]);

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
					let score = 0;

					if (buttonPressed.bigButton) score = 4;
					if (buttonPressed.AButton) score = 3;
					if (buttonPressed.BButton) score = 2;
					if (buttonPressed.XButton) score = 1;
					if (buttonPressed.YButton) score = 0;
					if (playerAnswering === whichControllerIsWhich.PLAYER_ONE)
						setPlayerOneScore((prev) => prev + score);
					if (playerAnswering === whichControllerIsWhich.PLAYER_TWO)
						setPlayerTwoScore((prev) => prev + score);
					if (playerAnswering === whichControllerIsWhich.PLAYER_THREE)
						setPlayerThreeScore((prev) => prev + score);
					setCanAcceptAnswers(true);
					setPlayerAnswering(null);
				}
			}
		}
	}, [buttonPressed, canAcceptAnswers]);

	useEffect(() => {
		const percentageTime = (timeRemaining / maxTimeRemaining) * 100;
		if (percentageTime <= 33) {
			setProgressBarColor('red');
		} else if (percentageTime <= 66) {
			setProgressBarColor('yellow');
		} else {
			setProgressBarColor('green');
		}
	}, [timeRemaining, setProgressBarColor]);

	useEffect(() => {
		if (round === '4') {
			navigate('/finalRound');
		}
	}, [round]);
	return (
		<Container maxWidth={false}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-evenly',
					width: '100%',
					height: '85vh',
				}}
			>
				<PlayerColumn
					playerNum={1}
					playerName={playerData ? playerData[0].displayName : ''}
					pronouns={playerData ? playerData[0].pronouns : ''}
					backgroundColor="#3cdb4e"
					score={playerOneScore}
					isActive={
						playerAnswering === whichControllerIsWhich.PLAYER_ONE
					}
					setActivePlayer={() => {
						setPlayerAnswering(whichControllerIsWhich.PLAYER_ONE);
					}}
				/>
				<PlayerColumn
					playerNum={2}
					playerName={playerData ? playerData[1].displayName : ''}
					pronouns={playerData ? playerData[1].pronouns : ''}
					backgroundColor="#d04242"
					score={playerTwoScore}
					isActive={
						playerAnswering === whichControllerIsWhich.PLAYER_TWO
					}
					setActivePlayer={() => {
						setPlayerAnswering(whichControllerIsWhich.PLAYER_TWO);
					}}
				/>
				<PlayerColumn
					playerNum={3}
					playerName={playerData ? playerData[2].displayName : ''}
					pronouns={playerData ? playerData[2].pronouns : ''}
					backgroundColor="#ecdb33"
					score={playerThreeScore}
					isActive={
						playerAnswering === whichControllerIsWhich.PLAYER_THREE
					}
					setActivePlayer={() => {
						setPlayerAnswering(whichControllerIsWhich.PLAYER_THREE);
					}}
				/>
			</Box>
			{debugMode && (
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
			)}
			<Box>
				{!showMiniGame ? (
					<LinearProgress
						variant="determinate"
						value={(timeRemaining / maxTimeRemaining) * 100}
						sx={{
							'& .MuiLinearProgress-bar': {
								backgroundColor: progressBarColor,
							},
						}}
					/>
				) : (
					<div>{currentMiniGame}</div>
				)}
			</Box>
		</Container>
	);
};
