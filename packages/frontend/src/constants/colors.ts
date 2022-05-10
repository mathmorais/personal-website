import { IColors } from "../interfaces/constants/IColors";

export class Colors implements IColors {
	readonly neutrals = {
		white: "#ffffff",
		black: "#121212",
	};

	readonly grays = {
		100: "#B8B8B8",
		200: "#333333",
		300: "#292929",
		400: "#1F1F1F",
	};

	readonly primary = {
		red: "#A44C4C",
		blue: "#3A7BD5",
		yellow: "#FFCE00",
		green: "#00B16A",
	};
}
