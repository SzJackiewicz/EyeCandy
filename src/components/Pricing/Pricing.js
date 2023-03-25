import React, { useRef } from "react";
import styled from "styled-components";
import { useInView } from "framer-motion";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <PricingWrapper
      id="cennik"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
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
          <StyledSocialInfo>
            znajdziesz mnie również na
            <br />
            <a
              href="https://www.facebook.com/eyecandystylizacjarzes"
              target="blank"
            >
              facebooku&nbsp;
            </a>
            i
            <a
              href="https://www.instagram.com/eyecandy_karolinawozniak"
              target="blank"
            >
              &nbsp;instagramie
            </a>
          </StyledSocialInfo>
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

const StyledSocialInfo = styled.div`
  font-size: 16px;
  margin: 10px 0 20px;
  text-align: center;
  line-height: 1.4rem;
  letter-spacing: 0.1em;
  a {
    text-decoration: none;
    margin: 0 3px;
    color: ${({ theme }) => theme.color.camel};
  }
`;

const InstagramIconContainer = styled(FacebookIconContainer)``;

const LogoContainer = styled.h3`
  display: flex;
`;
