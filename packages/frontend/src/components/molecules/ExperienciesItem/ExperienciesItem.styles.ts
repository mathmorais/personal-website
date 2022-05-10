import styled from "styled-components";

export const ExperienciesItemContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ExperienciesItemDate = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	gap: 5px;

	font-weight: 400;
	color: ${({ theme }) => theme.colors.grays[100]};
`;
