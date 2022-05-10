import styled from "styled-components";

export const PresentationContainer = styled.div`
	display: flex;
	gap: 10px;
	justify-content: center;

	.typed-cursor {
		font-size: ${({ theme: { font } }) => font.sizes.ExtraLarge};

		@media screen and (max-width: 800px) {
			font-size: ${({ theme: { font } }) => font.sizes.Medium};
		}
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

	span {
		@media screen and (max-width: 800px) {
			font-size: ${({ theme: { font } }) => font.sizes.Medium};
		}
	}
`;
