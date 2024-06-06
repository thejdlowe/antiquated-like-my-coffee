import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../appContext';
import { whichControllerIsWhich, buttonsToWhichRound } from '../../consts';
import { Container } from '@mui/material';
import { DebugControllers } from '../components';
import { MP3Data } from '../../media';
import useSound from 'use-sound';
import Carousel from 'react-material-ui-carousel';

export const Image = ({ ImgKey, src }: { ImgKey: string; src: string }) => {
	const navigate = useNavigate();
	return (
		<img
			key={ImgKey}
			src={src}
			style={{ width: '100wh', height: '95vh' }}
			onClick={(evt) => {
				evt.preventDefault();
				navigate('/game/1');
			}}
		/>
	);
};

export const ImageScreen = ({
	children,
}: {
	children: React.ReactNode | React.ReactNode[];
}) => {
	const { buttonPressed } = useAppContext();
	const [isPlayingSound, setIsPlayingSound] = useState(false);
	const [play] = useSound(MP3Data, {
		onend: () => {
			//setIsPlayingSound(false);
		},
		onloaderror: () => {},
	});
	const navigate = useNavigate();
	useEffect(() => {
		if (
			buttonPressed &&
			buttonPressed.whichController == whichControllerIsWhich.HOST
		) {
			if (
				buttonPressed.AButton ||
				buttonPressed.BButton ||
				buttonPressed.XButton ||
				buttonPressed.YButton
			) {
				let id = 'broken';
				if (buttonPressed.AButton)
					id = buttonsToWhichRound.A_BUTTON + '';
				if (buttonPressed.BButton)
					id = buttonsToWhichRound.B_BUTTON + '';
				if (buttonPressed.XButton)
					id = buttonsToWhichRound.X_BUTTON + '';
				if (buttonPressed.YButton)
					id = buttonsToWhichRound.Y_BUTTON + '';
				navigate(`/game/${id}`);
			}
			if (buttonPressed.bigButton && !isPlayingSound) {
				setIsPlayingSound(true);
				play();
			}
		}
	}, [buttonPressed, navigate, isPlayingSound]);

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
	return (
		<DebugControllers>
			<Container maxWidth={false}>{returner}</Container>
		</DebugControllers>
	);
};
