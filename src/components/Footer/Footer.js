import React from "react";
import styled from "styled-components";
import { StyledHeader } from "../StyledHeader/StyledHeader";
import { navigate } from "gatsby";

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
          <ListElement>telefon: 605 932 271</ListElement>
        </StyledListContainer>
        <StyledListContainer>
          <StyledHeader size="20px" title="INFORMACJE" bold="bold" />
          <ListElement onClick={() => navigate(`#galeria`)}>Usługi</ListElement>
          <ListElement onClick={() => navigate(`#cennik`)}>Cennik</ListElement>
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
  @media (max-width: 768px) {
    gap: 20px;
    margin: 50px auto 0;
  }
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
  align-items: baseline;
  gap: 100px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    width: 100%;
    gap: 0;
  }
`;

const StyledListContainer = styled.ul`
  display: flex;
  width: 385px;
  flex-direction: column;
  flex-grow: 1;
  min-height: 180px;
  margin: 30px 0 0;
  padding: 0;
  gap: 15px;
  &:nth-child(2) {
    align-items: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;
  }
`;

const ListElement = styled.li`
  font-size: 16px;
  list-style: none;
  margin-bottom: 15px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const RightsContainer = styled.div`
  display: flex;
  font-size: 10px;
  margin: 40px auto 20px;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    margin: 0 0 20px;
  }
`;

export default Footer;
