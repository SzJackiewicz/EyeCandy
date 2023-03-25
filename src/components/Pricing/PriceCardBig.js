import React from "react";
import styled from "styled-components";
import { StyledHeader } from "../StyledHeader/StyledHeader";
import { StaticImage } from "gatsby-plugin-image";

export const PriceCardBig = ({ data }) => {
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
          <StaticImage
            src={"../../assets/images/price/2.jpeg"}
            alt="pricing image"
          />
        </PriceBigColumnRight>
      </ColumnWrapper>
      <StyledStar>*powyzej 4 tygodni cena jak za nowy set</StyledStar>
    </PriceCardBigWrapper>
  );
};

const PriceCardBigWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 530px;
  height: 330px;
  box-shadow: 0px 0px 24px 0px rgba(228, 220, 209, 1);
  border-radius: 4px;
  font-family: ${({ theme }) => theme.font.family.playfair};
  padding: 5px;
  @media (max-width: 540px) {
    width: 355px;
    justify-content: center;
    align-items: center;
    height: 620px;
    padding-top: 10px;
  }
`;

const PriceBigTitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const ColumnWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  @media (max-width: 540px) {
    flex-direction: column;
    align-items: center;
  }
`;
const PriceBigColumnLeft = styled.div`
  display: flex;
  box-sizing: content-box;
  flex-direction: column;
  width: 58%;
  padding-left: 15px;
  @media (max-width: 540px) {
    width: 90%;
    padding: 0;
  }
`;

const PriceBigColumnRight = styled(PriceBigColumnLeft)`
  width: 42%;
  filter: grayscale();
  @media (max-width: 540px) {
    width: 90%;
    padding: 10px 0 0;
  }
`;

const ColumnTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 500;
  margin-bottom: 5px;
  font-size: 15px;
`;

const ColumnRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
`;

const StyledStar = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.color.camel};
  margin: 0 0 5px 15px;
  @media (max-width: 540px) {
    margin: 0 auto 5px;
  }
`;

const ServiceName = styled.p``;

const ServicePrice = styled.p``;
