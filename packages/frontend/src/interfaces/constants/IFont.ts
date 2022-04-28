type FontSize = string | number;

export interface IFont {
	sizes: {
		ExtraSmall: FontSize;
		Small: FontSize;
		Medium: FontSize;
		Large: FontSize;
	};

	families: {
		primary: string;
	};
}
