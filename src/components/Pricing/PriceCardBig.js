import React from "react";
import styled from "styled-components";
import { StyledHeader } from "../StyledHeader/StyledHeader";

export const PriceCardBig = ({ data }) => {
  console.log(data);
  return (
    <PriceCardBigWrapper>
      <PriceBigTitle>
        <StyledHeader size="20px" title={data.mainTitle} bold="bold" />
      </PriceBigTitle>
      <ColumnWrapper>
        <PriceBigColumnLeft>
          <ColumnTitle>{data.subTitleOne}</ColumnTitle>
          {data.pricesOne.map((price) => (
            <ColumnRow>
              <ServiceName>{price.name}</ServiceName>
              <ServicePrice>{price.price}</ServicePrice>
            </ColumnRow>
          ))}
        </PriceBigColumnLeft>
        <PriceBigColumnRight>
          <ColumnTitle>{data.subTitleSecond}</ColumnTitle>
          {data.pricesTwo.map((price) => (
            <ColumnRow>
              <ServicePrice>{price.price}</ServicePrice>
            </ColumnRow>
          ))}
        </PriceBigColumnRight>
      </ColumnWrapper>
    </PriceCardBigWrapper>
  );
};

const PriceCardBigWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 580px;
  height: 345px;
  box-shadow: 0px 0px 24px 0px rgba(228, 220, 209, 1);
  border-radius: 4px;
  font-family: ${({ theme }) => theme.font.family.playfair};
  padding: 5px;
`;
const PriceBigTitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const ColumnWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 20px;
`;
const PriceBigColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0 15px;
`;

const PriceBigColumnRight = styled(PriceBigColumnLeft)`
  align-items: center;
`;

const ColumnTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

const ColumnRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

const ServiceName = styled.p``;

const ServicePrice = styled.p``;
