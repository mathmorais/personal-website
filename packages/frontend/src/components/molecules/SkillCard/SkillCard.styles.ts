import styled from "styled-components";

export const SkillCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 25px;
`;

export const SkillCardIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${({ theme }) => theme.colors.grays[400]};
	padding: 15px;
	border-radius: 4px;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);

	svg {
		border-radius: inherit;
		width: 70px;
		height: 70px;
		fill: ${({ theme }) => theme.colors.grays[100]};
	}
`;
