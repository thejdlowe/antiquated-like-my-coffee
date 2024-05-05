import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../appContext';
import { whichControllerIsWhich, buttonsToWhichRound } from '../../consts';
import { Container } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

export const Image = ({ ImgKey, src }: { ImgKey: string; src: string }) => {
	return (
		<img key={ImgKey} src={src} style={{ width: '100%', height: '100%' }} />
	);
};

export const ImageScreen = ({
	children,
}: {
	children: React.ReactNode | React.ReactNode[];
}) => {
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
	
	let returner;
	if (Array.isArray(children)) {
		returner = (
			<Carousel
				indicators={false}
				interval={10000}
				autoPlay={true}
				swipe={false}
				animation="fade"
				duration={2000}
				stopAutoPlayOnHover={false}
			>
				{children}
			</Carousel>
		);
	} else returner = children;
	return <Container maxWidth={false}>{returner}</Container>;
	// return (
	// 	<Container maxWidth={false}>
	// 		<Carousel
	// 			indicators={false}
	// 			interval={10000}
	// 			autoPlay={true}
	// 			swipe={false}
	// 			animation="fade"
	// 			duration={2000}
	// 			stopAutoPlayOnHover={false}
	// 		>
	// 			{
	// 				images()
	// 				/* {Object.keys(playerImages).map((key) => {
	//       const src = playerImages[key];
	// 				return <img src={src} />;
	// 			})} */
	// 			}
	// 		</Carousel>
	// 	</Container>
	// );
};
