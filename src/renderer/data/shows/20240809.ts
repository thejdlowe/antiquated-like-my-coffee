import { ShowType } from '../show.type';
import { playerImages } from '../../media';

export const show: ShowType = {
	Round1: {
		minigame: 'Dopple-Banger',
		players: [
			{
				displayName: 'Chris',
				fullName: 'Chris Kanner',
				imagePath: playerImages.Bryn,
				pronouns: 'He/Him',
				sound: 0,
			},
			{
				displayName: 'Eric',
				fullName: 'Eric Milan',
				imagePath: playerImages.Indy,
				pronouns: 'He/Him',
				sound: 1,
			},
			{
				displayName: 'Audrey',
				fullName: 'Audrey Soper',
				imagePath: playerImages.Chelsea,
				pronouns: 'She/Her',
				sound: 2,
			},
		],
	},
	Round2: {
		minigame: 'Sexy Slogans',
		players: [
			{
				displayName: 'Lexi',
				fullName: 'Lexi [REDACTED]',
				imagePath: null,
				pronouns: 'She/Her/Robot',
				sound: 3,
			},
			{
				displayName: 'Tristan',
				fullName: 'Tristan Shae',
				imagePath: playerImages.Justin,
				pronouns: 'He/They',
				sound: 4,
			},
			{
				displayName: 'Emmy',
				fullName: 'Emmy Buttrick',
				imagePath: playerImages.Lindy,
				pronouns: 'She/Her',
				sound: 5,
			},
		],
	},
	Round3: {
		minigame: 'Time Line',
		players: [
			{
				displayName: 'Jimmy',
				fullName: 'Jimmy Kokinakes',
				imagePath: playerImages.Kim,
				pronouns: 'He/Him',
				sound: 6,
			},
			{
				displayName: 'Jeremy',
				fullName: 'Jeremy Pelzer',
				imagePath: playerImages.Lisa,
				pronouns: 'He/Him',
				sound: 7,
			},
			{
				displayName: 'Josh',
				fullName: 'Josh Waddle',
				imagePath: playerImages.Melissa,
				pronouns: 'He/Him',
				sound: 8,
			},
		],
	},
};
