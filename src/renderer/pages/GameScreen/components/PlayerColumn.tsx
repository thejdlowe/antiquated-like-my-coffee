import { Box, Grid, Typography } from '@mui/material';
export const PlayerColumn = ({
	playerName,
	pronouns,
	backgroundColor,
	score,
	isActive,
	playerNum,
	setActivePlayer,
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
