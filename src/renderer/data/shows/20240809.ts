import { ShowType } from '../show.type';
import { playerImages } from '../../media';

export const show: ShowType = {
	Round1: {
		minigame: 'Dopple-Banger',
		players: [
			{
				displayName: 'Chris',
				fullName: 'Chris Kanner',
				imagePath: playerImages.Chris,
				pronouns: 'He/Him',
				sound: 0,
			},
			{
				displayName: 'Eric',
				fullName: 'Eric Milan',
				imagePath: playerImages.Eric,
				pronouns: 'He/Him',
				sound: 1,
			},
			{
				displayName: 'Jonathan',
				fullName: 'Jonathan Dersch',
				imagePath: playerImages.Audrey,
				pronouns: 'He/Him',
				sound: 2,
			},
		],
	},
	Round2: {
		minigame: 'Everyday Roast',
		players: [
			{
				displayName: 'Lexi',
				fullName: 'Lexi [REDACTED]',
				imagePath: playerImages.Lexi,
				pronouns: 'She/Her/Robot',
				sound: 3,
			},
			{
				displayName: 'Tristan',
				fullName: 'Tristan Shae',
				imagePath: playerImages.Tristan,
				pronouns: 'He/They',
				sound: 4,
			},
			{
				displayName: 'Emmy',
				fullName: 'Emmy Buttrick',
				imagePath: playerImages.Emmy,
				pronouns: 'She/Her',
				sound: 5,
			},
		],
	},
	Round3: {
		minigame: "We've Got Movie Line!",
		players: [
			{
				displayName: 'Jimmy',
				fullName: 'Jimmy Kokinakes',
				imagePath: playerImages.Jimmy,
				pronouns: 'He/Him',
				sound: 6,
			},
			{
				displayName: 'Jeremy',
				fullName: 'Jeremy Pelzer',
				imagePath: playerImages.Jeremy,
				pronouns: 'He/Him',
				sound: 7,
			},
			{
				displayName: 'Josh',
				fullName: 'Josh Waddle',
				imagePath: playerImages.Josh,
				pronouns: 'He/Him',
				sound: 8,
			},
		],
	},
};
