import { m } from "framer-motion";
import styled from "styled-components";

export const ModalContainer = styled(m.div)`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	z-index: 3;
`;

export const ModalBackground = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	background: rgba(0, 0, 0, 0.4);
`;

export const ModalMain = styled(m.section)`
	width: 100%;
	max-width: 55rem;
	height: 50rem;
	background: ${({ theme: { colors } }) => colors.grays[400]};
	border-radius: 4px;
	padding: 5px;
`;

export const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	gap: 10px;
	background: ${({ theme: { colors } }) => colors.grays[300]};
	border-radius: inherit;
	padding: 15px;
`;
