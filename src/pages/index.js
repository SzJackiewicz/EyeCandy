import * as React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Gallery from "../components/Gallery/Gallery";

const IndexPage = ({ data }) => {
  return (
    <>
      <HeroImage imageSource={data.hero.publicURL} />
      <TitleContainer>
        <HeroTitle>Cześć piękna</HeroTitle>
        <HeroSubtitle>
          <span>zapraszam do</span> Eye Candy
        </HeroSubtitle>
      </TitleContainer>
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
  margin-top: 50px;
  padding: 0 20px;

  ${({ theme }) => theme.mq.desktop} {
    max-width: 1920px;
    margin: 100px auto;
    padding: 0 100px;
  }
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
  filter: grayscale();
  padding: 35px;
`;

const TitleContainer = styled.div`
  position: absolute;
  width: 480px;
  top: 42%;
  left: 4%;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 90px;
  font-family: ${({ theme }) => theme.font.family.caveat};
  font-weight: bold;
  font-style: italic;
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
    color: black;
  }
`;
export default IndexPage;
