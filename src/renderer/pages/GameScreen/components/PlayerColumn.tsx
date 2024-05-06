import { Box } from '@mui/material';
export const PlayerColumn = ({
	playerName,
	pronouns,
	backgroundColor,
	score,
	isActive,
	playerNum,
	setActivePlayer
}: {
	playerName: string;
	pronouns: string;
	backgroundColor: string;
	score: number;
	isActive: boolean;
	playerNum: number;
	setActivePlayer: any;
}) => {
	return (
		<Box
			sx={{
				width: '33%',
				transition: 'background 1s ease',
				backgroundColor: isActive ? backgroundColor : 'white',
				alignContent: 'center',
			}}
		>
            <center>
			<h6 onClick={() => {setActivePlayer();}}>{playerNum + ''}</h6>
			<h1>{playerName}</h1>
			<h3>{pronouns}</h3>
			
			<h2>{score}</h2>
            </center>
		</Box>
	);
};
