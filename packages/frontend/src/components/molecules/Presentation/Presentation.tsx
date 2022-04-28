import { VerticalLine } from "components/atoms/VerticalLine/VerticalLine";
import { Typing } from "~/components/atoms/Typing/Typing";
import { PresentationContainer, PresentationText } from "./Presentation.styles";

export const Presentation: React.FC<{ presentationText: string }> = ({
	presentationText,
}) => {
	return (
		<PresentationContainer>
			<VerticalLine />
			<PresentationText>
				<Typing
					staticText={presentationText}
					options={{
						startDelay: 250,
						strings: [presentationText],
						typeSpeed: 30,
					}}
				/>
			</PresentationText>
		</PresentationContainer>
	);
};
