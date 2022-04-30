import styled from "styled-components";
import { Button } from "~/components/atoms/Button/Button";

export const ProjectCardContainer = styled(Button)`
	display: flex;
	align-items: flex-end;

	width: 100%;
	height: 380px;

	background: ${({ theme }) => theme.colors.grays[300]};
	border-radius: 8px;
	overflow: hidden;
	position: relative;

	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

	padding: 20px;

	&:hover {
		cursor: default;
	}

	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			0deg,
			rgba(18, 18, 18, 0.7) 0.06%,
			rgba(18, 18, 18, 0.2) 52.6%,
			rgba(18, 18, 18, 0.05) 99.94%
		);
	}
`;

export const ProjectCardContent = styled.div`
	display: flex;
	text-align: start;
	flex-direction: column;
	gap: 10px;
	z-index: 3;

	p {
		font-weight: 600;
	}
`;

export const ProjectCardRow = styled.div`
	display: flex;
	gap: 20px;
	width: 50%;
`;
