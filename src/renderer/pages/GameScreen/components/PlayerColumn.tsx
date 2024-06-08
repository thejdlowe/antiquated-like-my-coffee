import { useEffect, useRef } from 'react';
import { Grid, Typography } from '@mui/material';
import { audioData } from '../../../media';
export const PlayerColumn = ({
	playerName,
	pronouns,
	backgroundColor,
	score,
	isActive,
	playerNum,
	setActivePlayer,
	playSound,
}: {
	playerName: string;
	pronouns: string;
	backgroundColor: string;
	score: number;
	isActive: boolean;
	playerNum: number;
	setActivePlayer: any;
	playSound: number;
}) => {
	// const files: string[] = [
	// 	//'./amongus.mp3',
	// 	'./fortnite.mp3',
	// 	'./gameboystartup.mp3',
	// 	'./homerun.mp3',
	// 	'./icq.mp3',
	// 	'./konami.wav',
	// 	'./mariopause.mp3',
	// 	'./mgs.mp3',
	// 	'./nsmb.wav',
	// 	'./zelda.mp3',
	// 	//'./wof.mp3',
	// ];
	// const file = files[playSound] ?? '';
	useEffect(() => {
		if (isActive) {
			// const [startTime, endTime, timeout] = audioData[playSound] ?? [0, 1];
			// const fileName = `./LMCsoundeffects.mp3`;
			// const audioElement = new Audio(fileName);
			// audioElement.preload = 'auto';
			// audioElement.addEventListener('canplaythrough', () => {
			// 	audioElement.currentTime =
			// 		startTime <= 0 ? 0 : startTime / 1000;
			// 	setTimeout(() => {
			// 		audioElement.pause();
			// 	}, timeout);
			// });
			const [startTime, endTime] = audioData[playSound] ?? [0, 1];
			const fileName = `./LMCsoundeffects.mp3#t=${[
				startTime <= 0 ? 0 : startTime / 1000,
				endTime / 1000,
			].join(',')}`;
			console.log(fileName);
			const audioElement = new Audio(fileName);

			audioElement.preload = 'auto';

			audioElement.play();
		}
	}, [isActive]);

	return (
		<Grid
			container
			direction="column"
			alignItems="center"
			justifyContent="center"
			style={{
				minHeight: '100vh',
				transition: 'background 1s ease',
				backgroundColor: isActive ? backgroundColor : 'white',
			}}
		>
			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
				style={{ minHeight: '33vh' }}
			>
				<Typography variant="h2">Player {playerNum + ''}</Typography>
				<Typography variant="h1">{playerName}</Typography>
				<Typography variant="h3">{pronouns}</Typography>
			</Grid>
			<Grid item style={{ minHeight: '66vh' }}>
				<Typography variant="h1">{score}</Typography>
			</Grid>
		</Grid>
	);
};
