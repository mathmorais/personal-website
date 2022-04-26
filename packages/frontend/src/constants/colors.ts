import { IColors } from "../interfaces/constants/IColors";

export class Colors implements IColors {
	readonly neutrals = {
		white: "#ffffff",
		black: "#121212",
	};

	readonly grays = {
		100: "#B8B8B8",
		200: "#292929",
		300: "#333333",
		400: "#1F1F1F",
	};

	readonly primary = {
		red: "#A44C4C",
		blue: "#4C7DA4",
		green: "#4CA44C",
		yellow: "#A4A44C",
	};
}
