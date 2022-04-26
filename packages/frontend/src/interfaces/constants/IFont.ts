type FontSize = string | number;

export interface IFont {
	sizes: {
		extraSmall: FontSize;
		small: FontSize;
		medium: FontSize;
		large: FontSize;
	};

	families: {
		primary: string;
	};
}
