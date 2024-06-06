import useSound from 'use-sound';
import Anthony from './Anthony.png';
import Chakra from './Chakra.png';
import ChrisH from './Chris H.png';
import Hannah from './Hannah.png';
import JD from './JD.png';
import Heather from './Heather.png';
import Kaley from './Kaley.png';
import Justin from './Justin.png';
import Motts from './Motts.png';
import RB from './RB.png';
import Rob from './Rob.png';
import Logo from './logo.png';

export const playerImages = {
	Anthony,
	Chakra,
	ChrisH,
	Hannah,
	JD,
	Heather,
	Kaley,
	Justin,
	Motts,
	RB,
	Rob,
};

export const logo = Logo;

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

export const playAllSounds = () => {
	play();
}

export const playerSounds = [
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
