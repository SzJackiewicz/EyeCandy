import * as React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Gallery from "../components/Gallery/Gallery";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import {StaticImage} from "gatsby-plugin-image";

export const query = graphql`
  query {
    hero: file(relativePath: { regex: "/homepage/eyehero.png/" }) {
      publicURL
    }
  }
`;
const IndexPage = ({ data }) => {
  return (
    <>
      <Navigation />
      <HeroSection imageSource={data.hero.publicURL}>
          <HeroImageWrapper>
            <StaticImage src='../assets/images/homepage/eyehero.png' alt='woman photo' />
          </HeroImageWrapper>
        <TitleContainer>
          <HeroTitle>Eye Candy <HeroSubtitle>by Karolina Woźniak</HeroSubtitle></HeroTitle>
          <HeroDescription>Salon piękności specjalizujący się w laminacji rzęs, makijażu permanentnym i stylizacji brwi</HeroDescription>
            <HeroButton>GALERIA</HeroButton>
        </TitleContainer>
      </HeroSection>
      <ContentWrapper>
        <Gallery />
        <Footer />
      </ContentWrapper>
    </>
  );
};

const ContentWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100%;
  overflow-x: hidden;
  width: 100vw;
`;

const HeroSection = styled.section`
  position: relative;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  min-height: 900px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const HeroImageWrapper = styled.div`
  position: absolute;
  max-width: 600px;
  bottom: 0;
  left: 5%;
`

const TitleContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 540px;
  top: 42%;
  right: 5%;
  text-align: left;
  filter: none;
  z-index: 1;
  transform: translateY(10%);
  animation: slide-in-anim 1.5s ease-out forwards;
  font-family: ${({ theme }) => theme.font.family.playfair};
  gap: 10px;
  @keyframes slide-in-anim {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(40%);
    }
  }
`;

const HeroTitle = styled.h1`
  position: relative;
  display: flex;
  font-size: 48px;
  align-items: baseline;
  justify-content: flex-start;
  text-align: left;
  gap: 10px;
  color: ${({ theme }) => theme.color.night};
  font-weight: 400;
  margin: 0;
  letter-spacing: 2px;
  
  &::before {
    content: "";
    width: 200px;
    height: 64px;
    background-color: ${({ theme }) => theme.color.light};
    position: absolute;
    z-index: -1;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 26px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.camel};
`;

const HeroDescription = styled.p`
  text-align: left ;
  font-size: 20px;
  margin: 0;
  line-height: 1.5rem;
  width: 450px;
`

const HeroButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width:181px;
  height:40px;
  background-color: ${({ theme }) => theme.color.camel};
  font-family: ${({ theme }) => theme.font.family.playfair};
  color: ${({ theme }) => theme.color.white};
  font-size: 20px;
  border: none;
  border-radius: 4px;
  letter-spacing: 2px;
  font-weight: 600;
  margin-top: 10px;
  padding-bottom: 4px;
`
export default IndexPage;
