import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { StyledHeader } from "../StyledHeader/StyledHeader";

export const PriceCardSmall = () => {
  return (
    <SmallCardWrapper>
      <CardText>
        <StyledHeader size="24px" title="Stylizacja brwi" bold="bold" />
        <CardPricesContainer>
          <PriceRow>
            <ServiceName>Koloryzacja - depilacja woskiem</ServiceName>
            <ServicePrice>70 zł</ServicePrice>
          </PriceRow>
          <PriceRow>
            <ServiceName>
              Geomertria - koloryzacja - depilacja woskiem
            </ServiceName>
            <ServicePrice>90 zł</ServicePrice>
          </PriceRow>
          <PriceRow>
            <ServiceName>Laminacja brwi</ServiceName>
            <ServicePrice>130 zł</ServicePrice>
          </PriceRow>
          <PriceRow>
            <ServiceName>Laminacja brwi bez koloryzacji</ServiceName>
            <ServicePrice>110 zł</ServicePrice>
          </PriceRow>
        </CardPricesContainer>
      </CardText>
      <CardImageContainer>
        <StaticImage src={"../../assets/images/price/1.jpeg"} />
      </CardImageContainer>
    </SmallCardWrapper>
  );
};

const SmallCardWrapper = styled.div`
  display: flex;
  width: 760px;
  border: 1px solid ${({ theme }) => theme.color.camel};
  border-radius: 4px;
  font-family: ${({ theme }) => theme.font.family.playfair};
  padding: 15px;
  gap: 25px;
  margin: 0 auto;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  font-family: ${({ theme }) => theme.font.family.playfair};
`;

const CardImageContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 2;
  padding: 10px;
`;

const CardTitle = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.color.night};
  font-family: ${({ theme }) => theme.font.family.playfair};
  font-size: 24px;
`;

const CardPricesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ServiceName = styled.p``;
const ServicePrice = styled.p``;
