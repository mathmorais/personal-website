import styled from "styled-components";

export const ProjectsGridContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	width: 100%;
	height: fit-content;
	overflow-y: scroll;
	gap: 0 30px;

	> button:nth-child(2n + 2) {
		margin-top: 30px;
	}
`;
