import React from "react";
import styled from "styled-components";
import {
  eyeBrowData,
  lashesData,
  permanentMakeupData,
} from "./constans/pricesData";
import { PriceCardBig } from "./PriceCardBig";
import { PriceCardSmall } from "./PriceCardSmall";
import InstagramIcon from "../../assets/icons/instagramIcon";
import FacebookIcon from "../../assets/icons/facebookIcon";
import { Logo } from "../../assets/icons/Logo";

export const Pricing = () => {
  return (
    <PricingWrapper id="cennik">
      <SmallConainer>
        <PriceCardSmall data={eyeBrowData} />
        <PriceCardSmall data={permanentMakeupData} />
      </SmallConainer>
      <BigContainer>
        <PriceCardBig data={lashesData} />
        <SocialMediaContainer>
          <IconsContainer>
            <FacebookIconContainer
              href="https://www.facebook.com/eyecandystylizacjarzes"
              target="blank"
            >
              <FacebookIcon />
            </FacebookIconContainer>
            <InstagramIconContainer
              href="https://www.instagram.com/eyecandy_karolinawozniak"
              target="blank"
            >
              <InstagramIcon />
            </InstagramIconContainer>
          </IconsContainer>
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </SocialMediaContainer>
      </BigContainer>
    </PricingWrapper>
  );
};

const PricingWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 1440px;
  margin: 40px 0;
  justify-content: center;
  gap: 40px;
`;

const SmallConainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const BigContainer = styled(SmallConainer)``;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 70%;
  width: 130px;
  gap: 30px;
  & > svg {
    cursor: pointer;
  }
`;

const FacebookIconContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 50px;
`;

const InstagramIconContainer = styled(FacebookIconContainer)``;

const LogoContainer = styled.h3`
  display: flex;
`;
