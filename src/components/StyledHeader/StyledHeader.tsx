import styled from "styled-components";
import * as React from "react";

type Props = {
    title?: string;
    size: string;
    bold: string;
}
export const StyledHeader = ({ title, size, bold }: Props) => {
  return (
    <StyledTitle size={size} bold={bold}>
      {title}
    </StyledTitle>
  );
};

const StyledTitle = styled.p<Props>`
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
