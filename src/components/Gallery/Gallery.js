import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

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

  return (
    <GallerySection>
        <GalleryTitle>Lorem ipsum dolor sit amet</GalleryTitle>
      <GalleryGridOne>
        {images &&
          images.one.edges.map((image) => {
            return (
              <GalleryItem>
                <GalleryTitleContainer>
                  <p>przedłużanie rzęs</p>
                </GalleryTitleContainer>
                <SingleImage key={image.node.id} src={image.node.publicURL} />
              </GalleryItem>
            );
          })}
      </GalleryGridOne>
      <GalleryGridTwo>
        {images &&
          images.two.edges.map((image) => {
            return (
              <GalleryItem>
                <GalleryTitleContainer>
                  <p>laminacja rzęs</p>
                </GalleryTitleContainer>
                <SingleImage key={image.node.id} src={image.node.publicURL} />
              </GalleryItem>
            );
          })}
      </GalleryGridTwo>
      <GalleryGridThree>
        {images &&
          images.three.edges.map((image) => {
            return (
              <GalleryItem>
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
      opacity: 100%;
      background-color: rgba(178, 1, 116, 0.4);
      top: 0;
      p {
        z-index: 2;
        color: ${({ theme }) => theme.color.light};
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
