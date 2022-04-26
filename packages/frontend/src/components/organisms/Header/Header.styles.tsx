import styled, { css } from "styled-components";

export type HeaderStylesProps = {
	scrolled?: boolean;
};

const HeaderScrolled = css`
	background: ${({ theme: { colors } }) => colors.grays[400]};
	color: ${({ theme: { colors } }) => colors.neutrals.white};
`;

export const HeaderContainer = styled.header<HeaderStylesProps>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: none;
	padding: 2.5rem 10rem;
	width: 100%;
	position: sticky;
	top: 0;
	background: transparent;
	color: ${({ theme: { colors } }) => colors.neutrals.white};
	z-index: 2;

	transition: background 0.25s, color 0.25s;
	transition-timing-function: ease-in-out;

	${({ scrolled }) => scrolled && HeaderScrolled};
`;

export const HeaderContent = styled.div`
	max-width: 1440px;
	width: 100%;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const HeaderNavigator = styled.nav`
	display: flex;
	gap: 20px;
`;
