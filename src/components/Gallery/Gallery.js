import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { useInView } from "framer-motion";

const query = graphql`
  query MyQuery {
    mobileOne: allFile(
      filter: { absolutePath: { regex: "assets/images/galleryMobileOne/" } }
      sort: { name: ASC }
    ) {
      edges {
        node {
          publicURL
          id
        }
      }
    }
    mobileTwo: allFile(
      filter: { absolutePath: { regex: "assets/images/galleryMobileTwo/" } }
      sort: { name: ASC }
    ) {
      edges {
        node {
          publicURL
          id
        }
      }
    }
  }
`;

const Gallery = () => {
  const images = useStaticQuery(query);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const refTwo = useRef(null);
  const isInViewTwo = useInView(refTwo, { once: true });

  return (
    <GallerySection id="galeria">
      <GalleryTitle
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        Przyjemność dla oczu i duszy
      </GalleryTitle>
      <GalleryGridOne ref={ref}>
        {images &&
          images.mobileOne.edges.map((image, index) => {
            return (
              <GalleryItem
                key={index}
                style={{
                  transform: isInView ? "none" : "translateY(200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                <GalleryTitleContainer>
                  {index === 0 && <p>Stylizacja rzęs</p>}
                  {index === 1 && <p>Lifting rzęs</p>}
                  {index === 2 && <p>Stylizacja brwi</p>}
                </GalleryTitleContainer>
                <SingleImage key={image.node.id} src={image.node.publicURL} />
              </GalleryItem>
            );
          })}
      </GalleryGridOne>
      <GalleryGridTwo ref={refTwo}>
        {images &&
          images.mobileTwo.edges.map((image, index) => {
            return (
              <GalleryItem
                key={index}
                style={{
                  transform: isInViewTwo ? "none" : "translateY(200px)",
                  opacity: isInViewTwo ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                <GalleryTitleContainer>
                  {index === 0 && <p>Stylizacja rzęs i brwi</p>}
                  {index === 1 && <p>Makijaż permanentny</p>}
                  {index === 2 && <p>Stylizacja rzęs</p>}
                </GalleryTitleContainer>
                <SingleImage key={image.node.id} src={image.node.publicURL} />
              </GalleryItem>
            );
          })}
      </GalleryGridTwo>
    </GallerySection>
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

const GallerySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  padding-top: 20px;
`;

const GalleryTitle = styled.h2`
  position: relative;
  font-size: 36px;
  font-family: ${({ theme }) => theme.font.family.playfair};
  font-weight: 500;
  letter-spacing: 2px;
  @media (max-width: 768px) {
    font-size: 22px;
  }

  &::before {
    content: "";
    width: 102%;
    height: 64px;
    background-color: ${({ theme }) => theme.color.light};
    position: absolute;
    z-index: -1;
    bottom: -24%;
    left: -1%;
    transform-origin: 0 50%;
    animation: ${appearAnimation} 0.8s 0.3s cubic-bezier(0.47, 0.46, 0.28, 0.97)
      forwards;
    animation: ${appearAnimation} 0.8s 0.3s;
    @media (max-width: 768px) {
      width: 102%;
      height: 44px;
    }
  }
`;

const GalleryGridOne = styled.div`
  display: flex;
  height: 400px;
  justify-content: center;
  max-width: 1440px;
  @media (max-width: 1320px) {
    flex-wrap: wrap;
    height: fit-content;
  }
`;

const GalleryGridTwo = styled(GalleryGridOne)``;

const GalleryItem = styled.div`
  box-sizing: border-box;
  padding: 10px;
  position: relative;
  width: 400px;
  height: 400px;
  overflow: hidden;
  @media (max-width: 1320px) {
    width: 350px;
    height: 350px;
  }

  &:hover {
    div {
      transition: 0.4s ease-in-out;
      background-color: ${({ theme }) => theme.color.light};
      opacity: 0.85;
      top: 10px;
      p {
        z-index: 2;
        color: ${({ theme }) => theme.color.night};
        font-size: 30px;
        line-height: 1rem;
        opacity: 100%;
        font-family: ${({ theme }) => theme.font.family.playfair};
        letter-spacing: 2px;
      }
    }
  }
`;

const SingleImage = styled.img`
  width: 100%;
  height: 100%;
  filter: grayscale();
  cursor: pointer;
  transition: 0.3s ease-in-out;
  border-radius: 10px;
  &:hover {
    filter: grayscale(0);
    transition: 0.3s ease-in-out;
  }
`;

const GalleryTitleContainer = styled.div`
  position: absolute;
  font-family: ${({ theme }) => theme.font.family.playfair};
  width: 95%;
  text-align: center;
  white-space: nowrap;
  z-index: 1;
  opacity: 0;
  top: -10%;
  border-radius: 10px 10px 0 0;
  background-color: ${({ theme }) => theme.color.camel};
  @media (max-width: 768px) {
    width: 330px;
  }
`;

export default Gallery;
