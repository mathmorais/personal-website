import { Typography } from "components/atoms/Typography/Typography";
import { VerticalLine } from "components/atoms/VerticalLine/VerticalLine";
import { PresentationContainer } from "./Presentation.styles";

export const Presentation = () => {
	return (
		<PresentationContainer>
			<VerticalLine />
			<Typography size="Large">
				Hi I'm Matheus Morais,
				<br /> A Frontend Web Developer
			</Typography>
		</PresentationContainer>
	);
};
