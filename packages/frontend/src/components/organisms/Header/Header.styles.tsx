import styled from "styled-components";

export type HeaderStylesProps = {
	scrolled?: boolean;
};

export const HeaderContainer = styled.header<HeaderStylesProps>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: none;
	padding: 2.5rem 10rem;
`;
