import styled from "styled-components";

export const VerticalLineContainer = styled.div`
	width: 4px;
	height: 100%;
	border-radius: 30px;
	background: ${({ theme: { colors } }) => colors.grays[300]};
`;
