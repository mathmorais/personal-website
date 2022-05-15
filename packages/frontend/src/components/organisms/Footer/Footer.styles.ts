import styled from "styled-components";

export const FooterContainer = styled.div`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.colors.grays[400]};
	padding: 3rem;

	a {
		color: ${({ theme }) => theme.colors.grays[100]};

		&:hover {
			color: ${({ theme }) => theme.colors.grays[100]}99;
		}
	}
`;
