import * as React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Gallery from "../components/Gallery/Gallery";
import Navigation from "../components/Navigation/Navigation";

const IndexPage = ({ data }) => {
  return (
    <>
      <Navigation />
      <HeroImage imageSource={data.hero.publicURL}>
        <TitleContainer>
          <HeroTitle>Cześć piękna</HeroTitle>
          <HeroSubtitle>
            <span>zapraszam do</span> Eye Candy
          </HeroSubtitle>
        </TitleContainer>
      </HeroImage>
      <ContentWrapper>
        <Gallery />
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
`;

const TitleContainer = styled.div`
  position: absolute;
  width: 480px;
  top: 42%;
  left: 4%;
  text-align: center;
  filter: none;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 90px;
  font-family: ${({ theme }) => theme.font.family.caveat};
  font-weight: bold;
  font-style: italic;
  color: ${({ theme }) => theme.color.darkPink};
  margin: 0;
`;

const HeroSubtitle = styled.h2`
  font-family: ${({ theme }) => theme.font.family.caveat};
  color: #e80f88;
  font-weight: bold;
  font-style: italic;
  font-size: 40px;
  span {
    font-family: ${({ theme }) => theme.font.family.caveat};
    font-size: 40px;
    color: ${({ theme }) => theme.color.darkPink};
  }
`;
export default IndexPage;
