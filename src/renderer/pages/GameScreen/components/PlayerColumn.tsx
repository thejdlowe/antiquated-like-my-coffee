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
			style={{ minHeight: '100vh' }}
		>
			<Grid item style={{ minHeight: '33vh' }}>
				Test me
			</Grid>
			<Grid item style={{ minHeight: '66vh' }}>
				And me
			</Grid>
		</Grid>
		// <Box
		// 	sx={{
		// 		width: '33%',
		// 		transition: 'background 1s ease',
		// 		backgroundColor: isActive ? backgroundColor : 'white',
		// 		alignContent: 'center',
		// 	}}
		// >
		// 		<Typography
		// 			onClick={(evt) => {
		// 				evt.preventDefault();
		// 				setActivePlayer();
		// 			}}
		// 			variant="h6"
		// 		>
		// 			Player {playerNum + ''}
		// 		</Typography>
		// 		<Typography variant="h2">{playerName}</Typography>
		// 		<Typography variant="h5">{pronouns}</Typography>
		// 		<br />
		// 		<Typography variant="h1">{score}</Typography>
		// </Box>
	);
};
