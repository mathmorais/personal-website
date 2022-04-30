import styled from "styled-components";

export const AnchorContainer = styled.a`
	text-decoration: none;
	color: ${({ theme: { colors } }) => colors.neutrals.white};
	transition: color 0.1s ease-in-out;
	cursor: pointer;

	&:active,
	&:hover {
		color: ${({ theme: { colors } }) => colors.neutrals.white}99;
	}
`;
