import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font: 400 1rem 'Raleway', sans-serif;
  } 

  button {
    cursor: pointer;
  }
`;
