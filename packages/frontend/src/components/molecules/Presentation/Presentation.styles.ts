import styled from "styled-components";

export const PresentationContainer = styled.div`
	display: flex;
	gap: 10px;

	a {
		color: ${({ theme: { colors } }) => colors.primary.blue};
		font-weight: 700;
		text-decoration: none;
	}
`;

export const PresentationText = styled.div`
	display: flex;
	flex-direction: column;
`;
