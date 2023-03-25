import * as React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import "assets/styles/normalize.css";
import { GlobalStyles } from "../assets/styles/GlobalStyles";
import { theme } from "../assets/styles/theme";
import { Seo } from "../components/SEO/Seo";

export const MainTemplate = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Seo />
      <main>{children}</main>
    </ThemeProvider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
