import { useState, useEffect } from "react";
import { VerticalLine } from "components/atoms/VerticalLine/VerticalLine";
import { Typing } from "~/components/atoms/Typing/Typing";
import { PresentationContainer, PresentationText } from "./Presentation.styles";

export const Presentation: React.FC<{ presentationText: string }> = ({
	presentationText,
}) => {
	const [shouldShow, setShouldShow] = useState(false);
	const TYPING_TIMEOUT = 200;

	useEffect(() => {
		const timeout = setTimeout(() => setShouldShow(true), TYPING_TIMEOUT);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<PresentationContainer>
			<VerticalLine />
			<PresentationText shouldShow={shouldShow}>
				<Typing
					staticText={presentationText}
					options={{
						startDelay: TYPING_TIMEOUT,
						strings: [presentationText],
						autoInsertCss: true,
						typeSpeed: 30,
					}}
				/>
			</PresentationText>
		</PresentationContainer>
	);
};
