import { ShowType } from '../show.type';
import { playerImages } from '../../media';

export const show: ShowType = {
	Round1: {
		minigame: 'Sexy Slogans',
		players: [
			{
				displayName: 'Bryn',
				fullName: 'Bryn Green',
				imagePath: playerImages.Bryn,
				pronouns: 'They/Them',
				sound: 0,
			},
			{
				displayName: 'Indy',
				fullName: 'Indy',
				imagePath: playerImages.Indy,
				pronouns: 'They/Them/He/Him',
				sound: 1,
			},
			{
				displayName: 'Michelle',
				fullName: 'Michelle Hoffman',
				imagePath: playerImages.Michelle,
				pronouns: 'She/Her',
				sound: 2,
			},
		],
	},
	Round2: {
		minigame: 'Acronympho',
		players: [
			{
				displayName: 'Chelsea',
				fullName: 'Chelsea Millin',
				imagePath: playerImages.Chelsea,
				pronouns: 'She/Her',
				sound: 3,
			},
			{
				displayName: 'Justin',
				fullName: 'Justin DeBrosse',
				imagePath: playerImages.Justin,
				pronouns: 'He/Him',
				sound: 4,
			},
			{
				displayName: 'Lindy',
				fullName: 'Lindy Zahrndt',
				imagePath: playerImages.Lindy,
				pronouns: 'She/Her',
				sound: 5,
			},
		],
	},
	Round3: {
		minigame: 'Sexy Slogans',
		players: [
			{
				displayName: 'Kim',
				fullName: 'Kim Eggerton',
				imagePath: playerImages.Kim,
				pronouns: 'She/Her',
				sound: 6,
			},
			{
				displayName: 'Lisa',
				fullName: 'Lisa Nelsen-Woods',
				imagePath: playerImages.Lisa,
				pronouns: 'She/Her',
				sound: 7,
			},
			{
				displayName: 'Melissa',
				fullName: 'Melissa Curley',
				imagePath: playerImages.Melissa,
				pronouns: 'She/Her',
				sound: 8,
			},
		],
	},
};
