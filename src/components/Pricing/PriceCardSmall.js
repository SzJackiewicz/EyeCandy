import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import styled from "styled-components";
import { StyledHeader } from "../StyledHeader/StyledHeader";

export const PriceCardSmall = ({ data }) => {
  return (
    <SmallCardWrapper>
      <CardText>
        <Title size="20px" title={data.title} bold="bold" />
        <CardPricesContainer>
          {data.prices.map((price) => (
            <PriceRow>
              <ServiceName>{price.name}</ServiceName>
              <ServicePrice>{price.price}</ServicePrice>
            </PriceRow>
          ))}
        </CardPricesContainer>
      </CardText>
      <CardImageContainer>
        {data && data.id === 1 && (
          <StaticImage
            src={"../../assets/images/price/1.jpeg"}
            alt="pricing image"
          />
        )}
        {data && data.id === 2 && (
          <StaticImage
            src={"../../assets/images/price/2.jpeg"}
            alt="pricing image"
          />
        )}
      </CardImageContainer>
    </SmallCardWrapper>
  );
};

const SmallCardWrapper = styled.div`
  display: flex;
  width: 530px;
  min-width: 530px;
  box-shadow: 0 0 24px 0 rgba(228, 220, 209, 1);
  border-radius: 4px;
  font-family: ${({ theme }) => theme.font.family.playfair};
  padding: 10px;
  gap: 10px;
  align-items: flex-start;
  @media (max-width: 540px) {
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    width: 355px;
    min-width: 355px;
  }
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  font-family: ${({ theme }) => theme.font.family.playfair};
  padding: 16px 0 0 12px;
  @media (max-width: 540px) {
    width: 100%;
    padding: 20px;
  }
`;

const CardImageContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 200px;
  margin: 3px;
  filter: grayscale();
  @media (max-width: 540px) {
    width: 310px;
  }
`;

const Title = styled(StyledHeader)`
  margin-top: 15px;
`;

const CardPricesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 540px) {
    margin-top: 10px;
  }
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 14px;
    width: 100%;
  }
`;

const ServiceName = styled.p`
  width: 80%;
  margin: 0;
`;
const ServicePrice = styled.p``;
