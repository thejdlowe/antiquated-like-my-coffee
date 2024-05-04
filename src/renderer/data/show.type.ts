export type PlayerType = {
	displayName: string;
	fullName: string;
};

export type RoundType = [PlayerType, PlayerType, PlayerType];

export type ShowType = {
	Round1: RoundType;
	Round2: RoundType;
	Round3: RoundType;
};
