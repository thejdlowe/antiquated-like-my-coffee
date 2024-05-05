import { Box } from '@mui/material';
export const PlayerColumn = ({
	playerName,
	backgroundColor,
	score,
	isActive,
}: {
	playerName: string;
	backgroundColor: string;
	score: number;
	isActive: boolean;
}) => {
	return (
		<Box >
			<Box>{playerName}</Box>
			<Box>{backgroundColor}</Box>
			<Box>{score}</Box>
			<Box>{isActive + ""}</Box>
		</Box>
	);
};
