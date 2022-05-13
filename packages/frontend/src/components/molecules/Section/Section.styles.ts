import { m } from "framer-motion";
import styled from "styled-components";

export type SectionStyleProps = {
	withoutBackground?: boolean;
	fillScreen?: boolean;
	spacing?: number;
};

export const SectionContainer = styled.section<SectionStyleProps>`
	width: 100%;
	height: ${({ fillScreen }) => (fillScreen ? "100vh" : "fit-content")};

	display: flex;
	justify-content: center;
	align-items: center;

	padding-top: ${({ spacing }) => spacing && `${spacing}rem`};

	padding-bottom: ${({ spacing }) => (spacing ? `${spacing}rem` : "2.5rem")};

	background: ${({ withoutBackground, theme: { colors } }) =>
		!withoutBackground && colors.neutrals.black};

	@media screen and (max-width: 800px) {
		padding: 2.5rem 5rem;
	}
`;

export const SectionContentAnimate = styled(m.div)`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SectionContent = styled.div`
	width: 100%;
	max-width: 640px;
	margin: auto;
	display: flex;
	flex-direction: column;
	gap: 25px;
`;

export const SectionTitle = styled.div`
	display: flex;
	gap: 10px;

	h2 {
		font-weight: 600;
	}
`;
