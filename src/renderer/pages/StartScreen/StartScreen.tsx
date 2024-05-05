import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../appContext';
import { whichControllerIsWhich, buttonsToWhichRound } from '../../consts';
import { Container } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { playerImages, logo } from '../../images';

const Image = ({ ImgKey, src }: { ImgKey: string; src: string }) => {
	return (
		<img key={ImgKey} src={src} style={{ width: '100%', height: '100%' }} />
	);
};

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
	const images = () => {
		const holders = [<Image ImgKey="logo" src={logo} />];
		for (const key in playerImages) {
			// @ts-ignore
			holders.push(<Image key={key} ImgKey={key} src={playerImages[key]} />);
		}
		return holders;
	};
	return (
		<Container maxWidth={false}>
			<Carousel
				indicators={false}
				interval={10000}
				autoPlay={true}
				swipe={false}
				animation="fade"
				duration={2000}
				stopAutoPlayOnHover={false}
			>
				{
					images()
					/* {Object.keys(playerImages).map((key) => {
          const src = playerImages[key];
					return <img src={src} />;
				})} */
				}
			</Carousel>
		</Container>
	);
};
