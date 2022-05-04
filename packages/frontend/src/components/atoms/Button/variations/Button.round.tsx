import styled, { css } from "styled-components";
import { Button } from "../Button";

const ButtonRoundSelected = css`
	background: ${({ theme: { colors } }) => colors.grays[100]};
`;

export const ButtonRound = styled(Button)<{ selected?: boolean }>`
	width: 25px;
	height: 25px;
	border-radius: 100%;
	font-size: 0px;
	padding: 0px;

	background: ${({ theme: { colors } }) => colors.grays[300]};

	${({ selected }) => selected && ButtonRoundSelected};
`;
