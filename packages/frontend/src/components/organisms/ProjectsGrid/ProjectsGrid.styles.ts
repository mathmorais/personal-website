import styled from "styled-components";

export const ProjectsGridContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	width: 100%;
	height: fit-content;
	gap: 0 30px;

	> div:nth-child(2n + 2) {
		margin-top: 35px;
	}

	@media screen and (max-width: 800px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 30px;

		> div:nth-child(2n + 2) {
			margin-top: initial;
		}
	}
`;
