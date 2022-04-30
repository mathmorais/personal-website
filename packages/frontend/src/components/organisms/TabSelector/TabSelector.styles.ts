import { motion } from "framer-motion";
import styled from "styled-components";

export const TabSelectorWrapper = styled.div`
	display: flex;
	gap: 25px;
`;

export const TabSelectorContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

export const TabSelectedContent = styled(motion.div)`
	overflow-y: auto;
	margin-right: 5px;
	overflow-x: hidden;

	&::-webkit-scrollbar {
		display: initial;
		width: 3px;
		border-radius: 25px;
		background: ${({ theme: { colors } }) => colors.grays[200]};
	}

	&::-webkit-scrollbar-thumb {
		background: ${({ theme: { colors } }) => colors.grays[100]};
		border-radius: 25px;
	}
`;
