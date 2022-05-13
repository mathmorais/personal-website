import styled from "styled-components";

export const ExperienciesItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;

	textarea {
		height: 22.5rem;
	}
`;

export const ExperienciesItemDate = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	gap: 5px;

	font-weight: 400;

	color: ${({ theme }) => theme.colors.grays[100]};

	p {
		font-size: ${({ theme: { font } }) => font.sizes.Small};
	}
`;
