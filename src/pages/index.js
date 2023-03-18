import * as React from "react";
import { graphql, navigate } from "gatsby";
import styled, { keyframes } from "styled-components";
import Gallery from "../components/Gallery/Gallery";
import { Pricing } from "../components/Pricing/Pricing";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

export const query = graphql`
  query {
    hero: allFile(
      filter: { relativePath: { regex: "/homepage/eyehero.png/" } }
    ) {
      nodes {
        publicURL
      }
      edges {
        node {
          childImageSharp {
            gatsbyImageData(placeholder: NONE, formats: WEBP)
          }
        }
      }
    }
  }
`;
const IndexPage = ({ data }) => {
  const MotionButton = motion(HeroButton);

  return (
    <>
      <Navigation />
      {data && (
        <HeroSection id="home" imageSource={data.hero.publicURL}>
          <HeroImageWrapper>
            <StaticImage
              src="../assets/images/homepage/eyehero.png"
              alt="woman photo"
            />
          </HeroImageWrapper>
          <TitleContainer>
            <HeroTitle>
              Eye Candy <HeroSubtitle>by Karolina Woźniak</HeroSubtitle>
            </HeroTitle>
            <HeroDescription>
              Salon piękności specjalizujący się w laminacji rzęs, makijażu
              permanentnym i&nbsp;stylizacji brwi
            </HeroDescription>
            <MotionButton
              onClick={() => navigate(`#gallery`)}
              animate={{
                scale: [1, 1.01, 1],
                boxShadow: [
                  "rgb(194 160 138) 1px 1px 1px",
                  "rgb(194 160 138) 0px 1px 8px",
                  "rgb(194 160 138) 1px 1px 1px",
                ],
              }}
              transition={{ ease: "linear", duration: 2, repeat: Infinity }}
            >
              <p>GALERIA</p>
            </MotionButton>
          </TitleContainer>
        </HeroSection>
      )}
      <ContentWrapper>
        <Gallery />
        <Pricing />
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
  min-height: 800px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media (max-width: 768px) {
    min-height: 700px;
  }
  @media (max-width: 481px) {
    min-height: 550px;
    min-width: 375px;
  }
`;

const HeroImageWrapper = styled.div`
  position: absolute;
  max-width: 550px;
  bottom: 0;
  left: 5%;
  @media (max-width: 768px) {
    opacity: 0.7;
  }
`;

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
  font-family: "Playfair Display", serif;
  gap: 10px;
  @media (max-width: 768px) {
    width: 320px;
  }

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
  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 42px;
  }
  @media (max-width: 481px) {
    font-size: 36px;
  }

  &::before {
    content: "";
    width: 243px;
    height: 64px;
    background-color: ${({ theme }) => theme.color.light};
    position: absolute;
    z-index: -1;
    @media (max-width: 768px) {
      flex-direction: column;
      height: 54px;
      width: 243px;
    }
    @media (max-width: 481px) {
      height: 46px;
      width: 190px;
    }
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 26px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.camel};
  @media (max-width: 768px) {
    font-size: 20px;
    margin: 5px 0;
    color: ${({ theme }) => theme.color.night};
    font-style: italic;
    font-weight: 500;
  }
  @media (max-width: 481px) {
    font-size: 18px;
  }
`;

const HeroDescription = styled.p`
  text-align: left;
  font-size: 20px;
  line-height: 1.7rem;
  width: 450px;
  margin: 10px 0;
  @media (max-width: 768px) {
    font-size: 14px;
    width: 300px;
    margin: 0;
    line-height: 1.4rem;
  }
`;

const HeroButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 181px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.camel};
  font-family: "Playfair Display", serif;
  color: ${({ theme }) => theme.color.white};
  font-size: 20px;
  border: none;
  border-radius: 4px;
  letter-spacing: 2px;
  font-weight: 600;
  margin-top: 10px;
  padding-bottom: 4px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 14px;
    width: 161px;
    height: 30px;
    padding-bottom: 0;
  }
`;
export default IndexPage;
