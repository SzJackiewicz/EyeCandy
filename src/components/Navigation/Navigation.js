import React from "react";
import styled from "styled-components";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import {theme} from "../../assets/styles/theme";
import {graphql, useStaticQuery} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";

export const query = graphql`
   query {
  logo: allFile(filter: {relativePath: {regex: "/logo.png/"}}) {
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
const Navigation = (props) => {
    const data = useStaticQuery(query)
    console.log(data)
    const { scrollYProgress } = useViewportScroll();
    const background = useTransform(
        scrollYProgress,
        [0, 0.2],
        [
            "rgba(0, 0, 0, 0)",
            "rgba(228, 220, 209, 0.7)",
        ]
    );

    return (
    <NavigationWrapper
        style={{
            background,
        }}
    >
      <NavigationRoutes>
       <LogoWrapper>
        <GatsbyImage
         image={data.logo.edges[0].node.childImageSharp.gatsbyImageData}
         alt='logo'
        />
       </LogoWrapper>
      </NavigationRoutes>
      <NavigationContact>
          <NavElement>galeria</NavElement>
          <NavElement>cennik</NavElement>
          <NavElement>tel: 123 123 123</NavElement>      </NavigationContact>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled(motion.div)`
  position: fixed;
  overflow: hidden;
  display: flex;
  height: 60px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
`;

const NavigationRoutes = styled.ul`
  display: flex;
  gap: 10px;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin: 0 50px;
`;

const NavigationContact = styled(NavigationRoutes)`
  display: flex;
  gap: 100px;
  justify-content: center;
`;

const LogoWrapper = styled.div`
  width: 130px;
  margin-left: 20px;
`

const NavElement = styled.li`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 100%;
  font-size: 18px;
  font-family: ${({ theme }) => theme.font.family.playfair};
  letter-spacing: 2px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.night};

  &:hover {
    transition: 0.4s all ease;
    transform: scale(1.1);
    color: ${({ theme }) => theme.color.camel};
  }
`;

export default Navigation;
