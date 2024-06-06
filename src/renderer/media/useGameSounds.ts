import useSound from 'use-sound';
import { useRef, useEffect, useState } from 'react';
export const useGameSounds = () => {
	// const gameSoundRef = useRef({
	// 	playAllSounds: () => {},
	// 	playerSounds: [() => {}],
	// });
	const [playAllSounds, setPlayAllSounds] = useState(() => () => {});
	const [playerSounds, setPlayerSounds] = useState([() => {}]);
	//const { playAllSounds, playerSounds } = gameSoundRef.current;
	useEffect(() => {
		const [play] = useSound('./LMCsoundeffects.mp3', {
			sprite: {
				amongus: [0, 3356],
				fortnite: [6468, 6557 - 6468],
				gameboy: [7556, 8962 - 7556],
				homerun: [10275, 11372 - 10275],
				icq: [12948, 14081 - 12948],
				mariopause: [17188, 18185 - 17188],
				metalgear: [19859, 21583 - 19859],
				mariopowerup: [22427, 23697 - 22427],
				konami: [24445, 25216 - 24445],
				wheeloffortune: [26008, 27233 - 26008],
				zelda: [29336, 31150 - 29336],
			},
		});

		const playAllSounds = () => {
			play();
		};

		const playerSounds = [
			() => play({ id: 'amongus' }),
			() => play({ id: 'fortnite' }),
			() => play({ id: 'gameboy' }),
			() => play({ id: 'homerun' }),
			() => play({ id: 'icq' }),
			() => play({ id: 'mariopause' }),
			() => play({ id: 'metalgear' }),
			() => play({ id: 'mariopowerup' }),
			() => play({ id: 'konami' }),
			() => play({ id: 'wheeloffortune' }),
			() => play({ id: 'zelda' }),
		];

		setPlayAllSounds(playAllSounds);
		setPlayerSounds(playerSounds);

		//gameSoundRef.current = {playAllSounds, playerSounds}
	}, []);
	return { playAllSounds, playerSounds };
};
