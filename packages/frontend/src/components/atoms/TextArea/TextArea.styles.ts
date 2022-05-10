import styled from "styled-components";

export const TextAreaContainer = styled.textarea`
	width: 100%;
	height: 100%;
	border-radius: 4px;
	border: 2px solid ${({ theme: { colors } }) => colors.grays[200]};
	background: ${({ theme: { colors } }) => colors.grays[400]};
	color: ${({ theme: { colors } }) => colors.neutrals.white};
	resize: none;
	padding: 10px;
	font-size: ${({ theme }) => theme.font.sizes.Small};
`;
