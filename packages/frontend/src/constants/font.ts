import { IFont } from "../interfaces/constants/IFont";

export class Font implements IFont {
	readonly sizes = {
		ExtraSmall: "1.2rem",
		Small: "1.4rem",
		Medium: "1.8rem",
		Large: "2.4rem",
		ExtraLarge: "3.2rem",
	};

	readonly families = {
		primary: "Fira Code, monospace",
	};

	readonly shortHand = `400 ${this.sizes.Small} ${this.families.primary}`;
}
