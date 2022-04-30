import styled, { css } from "styled-components";

export type ButtonStyleProps = {
	selected?: boolean;
	fitContent?: boolean;
	centralized?: boolean;
};

const ButtonSelected = css`
	background: ${({ theme: { colors } }) => colors.primary.red};
`;

const ButtonCentralized = css`
	justify-content: center;
	padding: 4px 15px;
`;

export const ButtonContainer = styled.button<ButtonStyleProps>`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 4px 15px;
	width: ${({ fitContent }) => (fitContent ? "fit-content" : "100%")};
	border-radius: 2px;
	border: none;
	background: ${({ theme: { colors } }) => colors.grays[400]};
	color: ${({ theme: { colors } }) => colors.neutrals.white};
	font-family: ${({ theme: { font } }) => font.families.primary};
	font-size: ${({ theme: { font } }) => font.sizes.ExtraSmall};

	cursor: pointer;

	&:hover {
		filter: brightness(0.8);
	}

	transition: background ${({ theme }) => theme.transitions.default},
		filter ${({ theme }) => theme.transitions.default};

	${({ centralized }) => centralized && ButtonCentralized}

	${({ selected }) => selected && ButtonSelected}
`;
