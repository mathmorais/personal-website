import styled, { css } from "styled-components";
import { Button } from "../Button";

const ButtonRoundSelected = css`
	background: ${({ theme: { colors } }) => colors.grays[100]};
`;

export const ButtonRound = styled(Button)<{ selected?: boolean }>`
	width: 20px;
	height: 20px;
	border-radius: 100%;

	background: ${({ theme: { colors } }) => colors.grays[300]};

	${({ selected }) => selected && ButtonRoundSelected};
`;
