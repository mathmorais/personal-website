import styled from "styled-components";

export const PresentationContainer = styled.div`
	display: flex;
	gap: 10px;

	.typed-cursor {
		font-size: ${({ theme: { font } }) => font.sizes.ExtraLarge};
	}
`;

export const PresentationText = styled.div<{ shouldShow: boolean }>`
	display: flex;
	flex-direction: column;
	white-space: nowrap;
	visibility: ${({ shouldShow }) => (shouldShow ? "visible" : "hidden")};

	a {
		color: ${({ theme: { colors } }) => colors.primary.yellow};
	}

	a:hover {
		color: ${({ theme: { colors } }) => colors.primary.yellow}99;
	}
`;
