import * as React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Gallery from "../components/Gallery/Gallery";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

const IndexPage = ({ data }) => {
  return (
    <>
      <Navigation />
      <HeroImage imageSource={data.hero.publicURL}>
        <TitleContainer>
          <HeroTitle>Salon kosmetyczny</HeroTitle>
          <HeroSubtitle><span>E</span>ye <span>C</span>andy</HeroSubtitle>
        </TitleContainer>
      </HeroImage>
      <ContentWrapper>
        <Gallery />
        <Footer />
      </ContentWrapper>
    </>
  );
};

export const query = graphql`
  query {
    hero: file(relativePath: { regex: "/homepage/0_hero.jpg/" }) {
      publicURL
    }
  }
`;

const ContentWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  min-height: 100%;
  overflow-x: hidden;
  width: 100vw;
`;

const HeroImage = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("${({ imageSource }) => imageSource}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 30%;
  padding: 35px;
  background-color: ${({ theme }) => theme.color.camel};
  background-blend-mode: overlay;
`;

const TitleContainer = styled.div`
  position: absolute;
  width: 480px;
  top: 42%;
  left: 5%;
  text-align: center;
  filter: none;
  z-index: 1;
  transform: translateY(10%);
  animation: slide-in-anim 1.5s ease-out forwards;

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
  font-size: 50px;
  font-family: ${({ theme }) => theme.font.family.switzer};
  color: ${({ theme }) => theme.color.darkPink};
  font-weight: 300;
  margin: 0;
`;

const HeroSubtitle = styled.h2`
  font-family: ${({ theme }) => theme.font.family.switzer};
  font-size: 40px;
  font-weight: 300;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.color.darkPink};
  span {
    color: ${({ theme }) => theme.color.lightPink};
  }
`;
export default IndexPage;
