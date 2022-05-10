import styled from "styled-components";

export const VerticalLineContainer = styled.div`
	min-width: 5px;
	border-radius: 30px;
	background: ${({ theme: { colors } }) => colors.grays[300]};
`;
