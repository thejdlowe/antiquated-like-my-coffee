import { Box } from '@mui/material';
export const PlayerColumn = ({
	playerName,
	pronouns,
	backgroundColor,
	score,
	isActive,
	playerNum,
}: {
	playerName: string;
	pronouns: string;
	backgroundColor: string;
	score: number;
	isActive: boolean;
	playerNum: number;
}) => {
	return (
		<Box
			sx={{
				width: '33%',
				transition: 'background 1s ease',
				backgroundColor: isActive ? backgroundColor : 'white',
			}}
		>
			<Box>{playerNum + ''}</Box>
			<Box>{playerName}</Box>
			<Box>{pronouns}</Box>
			<Box>{backgroundColor}</Box>
			<Box>{score}</Box>
			<Box>{isActive + ''}</Box>
		</Box>
	);
};
