import { ShowType } from '../show.type';
import { playerImages, useGameSounds } from '../../media';

const { playAllSounds, playerSounds } = useGameSounds();

export const show: ShowType = {
	Round1: {
		minigame: 'Suburban Innuendo',
		players: [
			{
				displayName: 'Chris F.',
				fullName: 'Chris Fay',
				imagePath: playerImages.RB,
				pronouns: 'He/Him',
				sound: playerSounds[0],
			},
			{
				displayName: 'Heather',
				fullName: 'Heather Scott',
				imagePath: playerImages.Heather,
				pronouns: 'She/Her',
				sound: playerSounds[1],
			},
			{
				displayName: 'Motts',
				fullName: 'The Motts',
				imagePath: playerImages.Motts,
				pronouns: 'He/Him',
				sound: playerSounds[2],
			},
		],
	},
	Round2: {
		minigame: 'Sexy Slogan',
		players: [
			{
				displayName: 'Chris H.',
				fullName: 'Chris Heiberger',
				imagePath: playerImages.ChrisH,
				pronouns: 'He/Him',
				sound: playerSounds[3],
			},
			{
				displayName: 'Q',
				fullName: 'Chakra Quan',
				imagePath: playerImages.Chakra,
				pronouns: 'She/Her',
				sound: playerSounds[4],
			},
			{
				displayName: 'Kaley',
				fullName: 'Kaley Michelle',
				imagePath: playerImages.Kaley,
				pronouns: 'She/Her',
				sound: playerSounds[5],
			},
		],
	},
	Round3: {
		minigame: "We've Got Movie Line",
		players: [
			{
				displayName: 'Rob',
				fullName: 'Rob Moore',
				imagePath: playerImages.Rob,
				pronouns: 'He/Him',
				sound: playerSounds[6],
			},
			{
				displayName: 'Lord Anthony',
				fullName: 'Lord Anthony Windsor II',
				imagePath: playerImages.Anthony,
				pronouns: 'He/Him',
				sound: playerSounds[7],
			},
			{
				displayName: 'Hannah',
				fullName: 'Hannah Romes',
				imagePath: playerImages.Hannah,
				pronouns: 'She/Her',
				sound: playerSounds[8],
			},
		],
	},
};
