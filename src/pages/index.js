import * as React from "react";
import { graphql, navigate } from "gatsby";
import styled, { keyframes } from "styled-components";
import Gallery from "../components/Gallery/Gallery";
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
            gatsbyImageData(placeholder: BLURRED, formats: WEBP)
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
            permanentnym i stylizacji brwi
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
      <ContentWrapper>
        <Gallery />
        <Footer />
      </ContentWrapper>
    </>
  );
};

const appearAnimation = keyframes`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`;

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
`;

const HeroImageWrapper = styled.div`
  position: absolute;
  max-width: 550px;
  bottom: 0;
  left: 5%;
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
    transform-origin: 0 50%;
    animation: ${appearAnimation} 0.8s 0.3s cubic-bezier(0.47, 0.46, 0.28, 0.97)
      forwards;
    animation: ${appearAnimation} 0.8s 0.3s;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 26px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.camel};
`;

const HeroDescription = styled.p`
  text-align: left;
  font-size: 20px;
  line-height: 1.7rem;
  width: 450px;
  margin: 10px 0;
`;

const HeroButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 181px;
  height: 40px;
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
  cursor: pointer;
`;
export default IndexPage;
