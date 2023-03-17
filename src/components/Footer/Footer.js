import React from "react";
import styled, { keyframes } from "styled-components";
import InstagramIcon from "../../assets/icons/instagramIcon";
import FacebookIcon from "../../assets/icons/facebookIcon";
import { StyledHeader } from "../StyledHeader/StyledHeader";
import { navigate } from "gatsby";
import { Logo } from "../../assets/icons/Logo";

const Footer = () => {
  return (
    <FooterContainer>
      <ButtonContainer onClick={() => navigate(`#home`)}>
        DO GÓRY
      </ButtonContainer>
      <InfoContainer>
        <StyledListContainer>
          <StyledHeader size="20px" title="KONTAKT" bold="bold" />
          <ListElement>adres: Toruń, ul. Szewska 11</ListElement>
          <ListElement>mail: eyecandystudiourody@gmail.com</ListElement>
          <ListElement>telefon: 123 123 123</ListElement>
        </StyledListContainer>
        <StyledListContainer>
          <StyledHeader size="20px" title="INFORMACJE" bold="bold" />
          <ListElement>Usługi</ListElement>
          <ListElement>Cennik</ListElement>
        </StyledListContainer>
        <StyledListContainer>
          <SocialMediaContainer>
            <IconsContainer>
              <InstagramIcon />
              <FacebookIcon />
            </IconsContainer>
            <LogoContainer>
              <Logo />
            </LogoContainer>
          </SocialMediaContainer>
        </StyledListContainer>
      </InfoContainer>
      <RightsContainer>
        EYE CANDY &#8226; wszelkie prawa zastrzeżone
      </RightsContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${({ theme }) => theme.font.family.playfair};
  margin: 80px auto 0;
  max-width: 1440px;
  color: ${({ theme }) => theme.color.night};
`;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const IconsContainer = styled.div`
  display: flex;
  height: 70%;
  width: 130px;
  gap: 30px;
  & > svg {
    cursor: pointer;
  }
`;

const LogoContainer = styled.h3`
  display: flex;
`;

const ButtonContainer = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 140px;
  height: 30px;
  background-color: ${({ theme }) => theme.color.camel};
  font-family: ${({ theme }) => theme.font.family.playfair};
  color: ${({ theme }) => theme.color.white};
  font-size: 16px;
  border: none;
  border-radius: 4px;
  letter-spacing: 2px;
  font-weight: 600;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  display: flex;
  max-width: 1440px;
  justify-content: space-around;
  letter-spacing: 2px;
`;

const StyledListContainer = styled.ul`
  display: flex;
  width: 385px;
  flex-direction: column;
  flex-grow: 1;
  min-height: 180px;
  margin: 30px 0 0;
  padding: 0;

  &:nth-child(2) {
    align-items: center;
  }
`;

const ListElement = styled.li`
  font-size: 16px;
  list-style: none;
  margin-bottom: 15px;
`;

const RightsContainer = styled.div`
  display: flex;
  margin: 40px 0 20px auto;
`;

export default Footer;
