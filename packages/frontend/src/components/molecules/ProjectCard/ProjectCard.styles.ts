import styled from "styled-components";

export const ProjectCardContainer = styled.div`
	display: flex;
	align-items: flex-end;

	width: 32rem;
	height: 38.5rem;

	background: ${({ theme }) => theme.colors.grays[300]};
	position: relative;
	border-radius: 5px;

	box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.6);

	padding: 25px 15px;

	&:hover {
		cursor: pointer;
	}

	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			180deg,
			rgba(10, 10, 10, 0.65) 0.06%,
			rgba(10, 10, 10, 0.85) 65.6%,
			rgba(10, 10, 10, 0.95) 90.94%
		);
	}

	@media screen and (max-width: 800px) {
		width: 100%;
	}
`;

export const ProjectCardPhoto = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;

	img {
		border-radius: 5px;
	}
`;

export const ProjectCardContent = styled.div`
	display: flex;
	text-align: start;
	flex-direction: column;
	gap: 10px;
	z-index: 2;
	overflow: hidden;

	p {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight: 600;
	}
`;

export const ProjectCardRow = styled.div`
	display: flex;
	gap: 20px;
	width: 50%;
`;
