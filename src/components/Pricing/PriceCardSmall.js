import { StaticImage } from "gatsby-plugin-image";
import React from "react";
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
  width: 575px;
  box-shadow: 0px 0px 24px 0px rgba(228, 220, 209, 1);
  border-radius: 4px;
  font-family: ${({ theme }) => theme.font.family.playfair};
  padding: 10px;
  gap: 10px;
  align-items: flex-start;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  font-family: ${({ theme }) => theme.font.family.playfair};
  padding: 16px 0 0 12px;
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
`;

const Title = styled(StyledHeader)`
  margin-top: 15px;
`;

const CardPricesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ServiceName = styled.p`
  width: 80%;
  margin: 0;
`;
const ServicePrice = styled.p``;
