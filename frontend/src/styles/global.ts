"use client";

import { DefaultTheme, createGlobalStyle, css } from "styled-components";

type GlobalStyleProps = {
  theme?: DefaultTheme;
};

const GlobalStyles = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;

    &::before, &::after {
      box-sizing: inherit;
    }
  }

  html {
    scroll-behavior: smooth;
  }
  
  body {
    ${({}) => css`
      font-size: 1.6rem;
      outline: none;
    `}
  }

  button {
    cursor: pointer;
  }
`;
export default GlobalStyles;
