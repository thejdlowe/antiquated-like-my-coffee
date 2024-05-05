import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../appContext';
import { whichControllerIsWhich, buttonsToWhichRound } from '../../consts';
import { Container } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { playerImages } from '../../images';

export const StartScreen = () => {
	const { buttonPressed } = useAppContext();
	const navigate = useNavigate();
	useEffect(() => {
		if (
			buttonPressed &&
			buttonPressed.whichController == whichControllerIsWhich.HOST &&
			(buttonPressed.AButton ||
				buttonPressed.BButton ||
				buttonPressed.XButton ||
				buttonPressed.YButton)
		) {
			let id = 'broken';
			if (buttonPressed.AButton) id = buttonsToWhichRound.A_BUTTON + '';
			if (buttonPressed.BButton) id = buttonsToWhichRound.B_BUTTON + '';
			if (buttonPressed.XButton) id = buttonsToWhichRound.X_BUTTON + '';
			if (buttonPressed.YButton) id = buttonsToWhichRound.Y_BUTTON + '';
			navigate(`/game/:${id}`);
		}
	}, [buttonPressed, navigate]);
	return (
		<Container maxWidth={false}>
			<Carousel
				indicators={false}
				interval={2000}
				autoPlay={true}
				swipe={false}
				animation="slide"
				duration={600}
			>
				<img src={playerImages.Alex} />
				<img src={playerImages.BC} />
			</Carousel>
		</Container>
	);
};
