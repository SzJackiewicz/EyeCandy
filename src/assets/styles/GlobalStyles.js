import { createGlobalStyle } from "styled-components";
import { theme } from 'assets/styles/theme'

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }
  html {
    overflow-x: hidden ;
    scroll-behavior: smooth;
    font-family: ${theme.font.family.playfair};
  }
`;
