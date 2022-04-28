import styled from "styled-components";
import { Typography } from "../Typography/Typography";

export const TypingWrapper = styled.div``;

export const TypingText = styled(Typography).attrs({
	as: "span",
})`
	font-size: ${({ size, theme: { font } }) => font.sizes[size ?? "Large"]};
`;
