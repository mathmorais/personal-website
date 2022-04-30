import { motion } from "framer-motion";
import styled from "styled-components";

export type SectionStyleProps = {
	withBackground?: boolean;
	fillScreen?: boolean;
	spacing?: number;
};

export const SectionContainer = styled.section<SectionStyleProps>`
	width: 100%;
	height: ${({ fillScreen }) => (fillScreen ? "100vh" : "fit-content")};

	display: flex;
	justify-content: center;
	align-items: center;

	scroll-snap-align: start;

	padding-bottom: ${({ spacing }) => spacing && `${spacing}rem`};

	background: ${({ withBackground, theme: { colors } }) =>
		withBackground && colors.neutrals.black};
`;

export const SectionContentAnimate = styled(motion.div)`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SectionContent = styled.div`
	width: 100%;
	max-width: 640px;
	margin: auto;
`;

export const SectionTitle = styled.div`
	display: flex;
	gap: 10px;
	margin-bottom: 25px;

	h2 {
		font-weight: 600;
	}
`;
