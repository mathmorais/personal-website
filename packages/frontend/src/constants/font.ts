import { IFont } from "../interfaces/constants/IFont";

export class Font implements IFont {
	readonly sizes = {
		extraSmall: "1.0rem",
		small: "1.2rem",
		medium: "1.8rem",
		large: "2.4rem",
		extraLarge: "3.2rem",
	};

	readonly families = {
		primary: "Fira Code, monospace",
	};

	readonly shortHand = `400 ${this.sizes.small} ${this.families.primary}`;
}
