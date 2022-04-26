import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

	&:root {
		font-size: 62.5%;
	}

  body {
		font: ${({ theme }) => theme.font.shortHand};
		text-rendering: optimizeLegibility;
    font-smooth: antialiased;
	}
`;
