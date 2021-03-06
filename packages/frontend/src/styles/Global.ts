import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
	

	html {
		scroll-snap-type: y proximity;
	}

	&:root {
		font-size: 62.5%;
	}


  &::-webkit-scrollbar {
		display: none;
	}


  body {
		background: ${({ theme }) => theme.colors.neutrals.black};
		font: ${({ theme }) => theme.font.shortHand};
		text-rendering: optimizeLegibility;
    font-smooth: antialiased;
	}

	:root {
		@media screen and (max-width: 800px) {
			font-size: 57%;
		}

		@media screen and (max-width: 500px) {
			font-size: 55%;
		}
	}

`;
