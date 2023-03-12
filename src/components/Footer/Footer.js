import React from "react";
import styled from "styled-components";
import InstagramIcon from "../../assets/icons/instagramIcon";
import FacebookIcon from "../../assets/icons/facebookIcon";

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMediaContainer>
        <IconsContainer>
          <InstagramIcon />
          <FacebookIcon />
        </IconsContainer>
        <LogoContainer>LOGO</LogoContainer>
        <ButtonContainer>do góry</ButtonContainer>
      </SocialMediaContainer>
      <InfoContainer>
        <StyledListContainer>
          <ListTitle>KONTAKT</ListTitle>
          <ListElement>adres: Toruń, ul. Szewska 11</ListElement>
          <ListElement>mail: eyecandystudiourody@gmail.com</ListElement>
          <ListElement>telefon: 123 123 123</ListElement>
        </StyledListContainer>
        <StyledListContainer>
          <ListTitle>INFORMACJE</ListTitle>
          <ListElement>Usługi</ListElement>
          <ListElement>Cennik</ListElement>
        </StyledListContainer>
        <StyledListContainer>
          <ListTitle>MAPA SERWISU</ListTitle>
          <ListElement>usługi</ListElement>
          <ListElement>cennik</ListElement>
          <ListElement>kontakt</ListElement>
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
  font-family: ${({ theme }) => theme.font.family.switzer};
  margin: 30px auto;
  max-width: 1500px;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  color: ${({ theme }) => theme.color.camel};
`;

const IconsContainer = styled.div`
  display: flex;
  height: 70%;
  width: 130px;
  gap: 30px;
`;

const LogoContainer = styled.div`
  display: flex;
  width: 130px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 130px;
`;

const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  letter-spacing: 2px;
`;

const StyledListContainer = styled.ul`
  display: flex;
  width: 355px;
  flex-direction: column;
  padding: 0;
`;

const ListTitle = styled.h3`
  color: ${({ theme }) => theme.color.camel};
`;

const ListElement = styled.li`
  font-size: 18px;
  list-style: none;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.color.camel};
`;

const RightsContainer = styled.div`
  display: flex;
  width: 100%;
  color: ${({ theme }) => theme.color.camel};

`;

export default Footer;
