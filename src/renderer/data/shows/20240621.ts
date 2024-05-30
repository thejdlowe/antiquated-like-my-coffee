import { ShowType } from '../show.type';
import { playerImages } from '../../media';

export const show: ShowType = {
	Round1: {
		minigame: 'Suburban Innuendo',
		players: [
			{
				displayName: 'Chris F.',
				fullName: 'Chris Fay',
				imagePath: playerImages.RB,
				pronouns: 'He/Him',
			},
			{
				displayName: 'Heather',
				fullName: 'Heather Scott',
				imagePath: playerImages.Heather,
				pronouns: 'She/Her',
			},
			{
				displayName: 'Motts',
				fullName: 'The Motts',
				imagePath: playerImages.Motts,
				pronouns: 'He/Him',
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
			},
			{
				displayName: 'Q',
				fullName: 'Chakra Quan',
				imagePath: playerImages.Chakra,
				pronouns: 'She/Her',
			},
			{
				displayName: 'Kaley',
				fullName: 'Kaley Michelle',
				imagePath: playerImages.Kaley,
				pronouns: 'She/Her',
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
			},
			{
				displayName: 'Lord Anthony',
				fullName: 'Lord Anthony Windsor II',
				imagePath: playerImages.Anthony,
				pronouns: 'He/Him',
			},
			{
				displayName: 'Hannah',
				fullName: 'Hannah Romes',
				imagePath: playerImages.Hannah,
				pronouns: 'She/Her',
			},
		],
	},
};
