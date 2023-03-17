import React from "react";
import styled from "styled-components";
import { PriceCardSmall } from "./PriceCardSmall";

export const Pricing = () => {
  return (
    <PricingWrapper id="price">
      <PriceCardSmall />
    </PricingWrapper>
  );
};

const PricingWrapper = styled.section`
  display: flex;
  max-width: 1440px;
  flex-direction: column;
`;
