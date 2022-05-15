import { m } from "framer-motion";
import styled from "styled-components";

export type SectionStyleProps = {
	withoutBackground?: boolean;
	fillScreen?: boolean;
	spacing?: number;
};

export const SectionContainer = styled.section<SectionStyleProps>`
	width: 100%;
	min-height: ${({ fillScreen }) => (fillScreen ? "100vh" : "fit-content")};

	display: flex;
	justify-content: center;
	align-items: center;

	padding-top: ${({ spacing }) => spacing && `${spacing}rem`};

	padding-bottom: ${({ spacing }) => spacing && `${spacing}rem`};

	background: ${({ withoutBackground, theme: { colors } }) =>
		!withoutBackground && colors.neutrals.black};

	@media screen and (max-width: 800px) {
		padding: 2.5rem 3rem;
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
	max-width: 700px;
	margin: auto;
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
`;

export const SectionTitle = styled.div`
	display: flex;
	gap: 10px;

	h2 {
		font-weight: 600;
	}
`;

export const SectionDescription = styled.div`
	margin-bottom: 1.5rem;
`;
