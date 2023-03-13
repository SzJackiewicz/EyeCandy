import React, {useRef} from "react";
import styled, {keyframes} from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { useInView } from "framer-motion";

const query = graphql`
  query MyQuery {
    one: allFile(
      filter: { absolutePath: { regex: "assets/images/galleryOne/" } }
      sort: { name: ASC }
    ) {
      edges {
        node {
          publicURL
          id
        }
      }
    }
    two: allFile(
      filter: { absolutePath: { regex: "assets/images/galleryTwo/" } }
      sort: { name: ASC }
    ) {
      edges {
        node {
          publicURL
          id
        }
      }
    }
    three: allFile(
      filter: { absolutePath: { regex: "assets/images/galleryThree/" } }
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
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const refTwo = useRef(null)
    const isInViewTwo = useInView(refTwo, {once: true})
    const refThree = useRef(null)
    const isInViewThree = useInView(refThree, {once: true})


    return (
    <GallerySection >
        <GalleryTitle
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
        >Lorem ipsum dolor sit amet</GalleryTitle>
      <GalleryGridOne ref={ref}>
        {images &&
          images.one.edges.map((image) => {
            return (
              <GalleryItem
                  style={{
                      transform: isInView ? "none" : "translateY(200px)",
                      opacity: isInView ? 1 : 0,
                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                  }}
              >
                <GalleryTitleContainer>
                  <p>przedłużanie rzęs</p>
                </GalleryTitleContainer>
                <SingleImage key={image.node.id} src={image.node.publicURL} />
              </GalleryItem>
            );
          })}
      </GalleryGridOne>
      <GalleryGridTwo ref={refTwo}>
        {images &&
          images.two.edges.map((image) => {
            return (
              <GalleryItem
                  style={{
                      transform: isInViewTwo ? "none" : "translateY(200px)",
                      opacity: isInViewTwo ? 1 : 0,
                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                  }}
              >
                <GalleryTitleContainer>
                  <p>laminacja rzęs</p>
                </GalleryTitleContainer>
                <SingleImage key={image.node.id} src={image.node.publicURL} />
              </GalleryItem>
            );
          })}
      </GalleryGridTwo>
      <GalleryGridThree ref={refThree}>
        {images &&
          images.three.edges.map((image) => {
            return (
              <GalleryItem
                  style={{
                    transform: isInViewThree ? "none" : "translateY(200px)",
                    opacity: isInViewThree ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                  }}
              >
                <GalleryTitleContainer>
                  <p>stylizacja brwi</p>
                </GalleryTitleContainer>
                <SingleImage key={image.node.id} src={image.node.publicURL} />
              </GalleryItem>
            );
          })}
      </GalleryGridThree>
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
  max-width: 100%;
  padding-top: 20px;
`;

const GalleryTitle = styled.h2`
  position: relative;
  font-size: 36px;
  font-family: ${({ theme }) => theme.font.family.playfair};
  font-weight: 500;
  letter-spacing: 2px;

  &::before {
    content: "";
    width: 60%;
    height: 64px;
    background-color: ${({ theme }) => theme.color.light};
    position: absolute;
    z-index: -1;
    bottom: -21%;
    transform-origin: 0 50%;
    animation: ${appearAnimation} 0.8s 0.3s cubic-bezier(0.47, 0.46, 0.28, 0.97) forwards;
    animation: ${appearAnimation} 0.8s 0.3s
  }
`

const GalleryGridOne = styled.div`
  display: flex;
  height: 100%;
`;

const GalleryGridTwo = styled(GalleryGridOne)``;
const GalleryGridThree = styled(GalleryGridOne)``;

const GalleryItem = styled.div`
  position: relative;
  margin: 20px;
  width: 400px;
  height: 400px;
  overflow: hidden;
  &:hover {
    div {
      transition: 0.4s ease-in-out;
      background-color:${({ theme }) => theme.color.camel};
      opacity: 0.85;
      top: 0;
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
  border-radius: 3px;
  &:hover {
    filter: grayscale(0);
    transition: 0.3s ease-in-out;
  }
`;

const GalleryTitleContainer = styled.div`
  position: absolute;
  font-family: ${({ theme }) => theme.font.family.playfair};
  width: 100%;
  text-align: center;
  white-space: nowrap;
  z-index: 1;
  opacity: 0;
  top: -10%;
  background-color: ${({ theme }) => theme.color.camel};`;

export default Gallery;
