import styled from "styled-components";
import React from "react";
export const StyledHeader = ({ title, size, bold }) => {
  return (
    <StyledTitle size={size} bold={bold}>
      {title}
    </StyledTitle>
  );
};

const StyledTitle = styled.p`
  position: relative;
  width: fit-content;
  font-family: ${({ theme }) => theme.font.family.playfair};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "normal")};
  margin: 0;
  &::before {
    z-index: -1;
    position: absolute;
    content: "";
    width: 101%;
    height: 140%;
    bottom: -14%;
    background-color: ${({ theme }) => theme.color.light};
  }
`;
