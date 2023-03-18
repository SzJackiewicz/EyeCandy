import * as React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import "assets/styles/normalize.css";
import {GlobalStyles} from "../assets/styles/GlobalStyles";
import {theme} from "../assets/styles/theme";

export const MainTemplate = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <main>{children}</main>
    </ThemeProvider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
