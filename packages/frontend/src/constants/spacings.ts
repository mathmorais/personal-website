import { ISpacings } from "../interfaces/constants/ISpacings";

export class Spacings implements ISpacings {
	readonly paddings = {
		small: "0.5rem",
		medium: "1rem",
		large: "2rem",
	};

	readonly margins = {
		small: "0.5rem",
		medium: "1rem",
		large: "2rem",
	};
}
