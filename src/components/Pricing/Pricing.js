import React from "react";
import styled from "styled-components";
import { eyeBrowData, permanentMakeupData } from "./constans/pricesData";
import { PriceCardSmall } from "./PriceCardSmall";

export const Pricing = () => {
  return (
    <PricingWrapper id="cennik">
      <PriceCardSmall data={eyeBrowData} />
      <PriceCardSmall data={permanentMakeupData} />
    </PricingWrapper>
  );
};

const PricingWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 1440px;
  margin: 40px 0;
  justify-content: center;
  gap: 15px;
`;
