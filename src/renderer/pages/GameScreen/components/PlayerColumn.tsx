import { useEffect, useRef } from 'react';
import { Grid, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
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
	const files: string[] = [
		//'./amongus.mp3' + "?rand=" + uuidv4(),
		'./fortnite.mp3' + '?rand=' + uuidv4(),
		'./gameboystartup.mp3' + '?rand=' + uuidv4(),
		'./homerun.mp3' + '?rand=' + uuidv4(),
		'./icq.mp3' + '?rand=' + uuidv4(),
		'./KonamiPause1.mp3' + '?rand=' + uuidv4(),
		'./mariopause.mp3' + '?rand=' + uuidv4(),
		'./mgs.mp3' + '?rand=' + uuidv4(),
		'./nsmb_power-up.mp3' + '?rand=' + uuidv4(),
		'./zelda.mp3' + '?rand=' + uuidv4(),
		//'./wof.mp3'+ "?rand=" + uuidv4(),
	];
	const file = files[playSound] ?? '';
	const audioElement = new Audio(file);
	const myAudioRef = useRef(audioElement);
	useEffect(() => {
		if (isActive) {
			if (myAudioRef.current) {
				myAudioRef.current.play();
			}
		}
	}, [isActive, myAudioRef]);
	// const [play] = useSound('./LMCsoundeffects.mp3', {
	// 	sprite: {
	// 		amongus: [0, 3356],
	// 		fortnite: [6468, 6557 - 6468],
	// 		gameboy: [7556, 8962 - 7556],
	// 		homerun: [10275, 11372 - 10275],
	// 		icq: [12948, 14081 - 12948],
	// 		mariopause: [17188, 18185 - 17188],
	// 		metalgear: [19859, 21583 - 19859],
	// 		mariopowerup: [22427, 23697 - 22427],
	// 		konami: [24445, 25216 - 24445],
	// 		wheeloffortune: [26008, 27233 - 26008],
	// 		zelda: [29336, 31150 - 29336],
	// 	},
	// });
	// const playerSounds = [
	// 	() => play({ id: 'amongus' }),
	// 	() => play({ id: 'fortnite' }),
	// 	() => play({ id: 'gameboy' }),
	// 	() => play({ id: 'homerun' }),
	// 	() => play({ id: 'icq' }),
	// 	() => play({ id: 'mariopause' }),
	// 	() => play({ id: 'metalgear' }),
	// 	() => play({ id: 'mariopowerup' }),
	// 	() => play({ id: 'konami' }),
	// 	() => play({ id: 'wheeloffortune' }),
	// 	() => play({ id: 'zelda' }),
	// ];
	// useEffect(() => {
	// 	if (isActive) {
	// 		const sound = playerSounds[playSound];
	// 		if (sound) sound();
	// 	}
	// }, [play, isActive]);
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
