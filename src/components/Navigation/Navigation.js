import React from "react";
import styled from "styled-components";

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationRoutes>
        <NavElement>LOGO</NavElement>
        <NavElement>galeria</NavElement>
        <NavElement>cennik</NavElement>
        <NavElement>kontakt</NavElement>
      </NavigationRoutes>
      <NavigationContact>
        <NavElement>tel: 123 123 123</NavElement>
      </NavigationContact>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.nav`
  position: fixed;
  overflow: hidden;
  display: flex;
  height: 70px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
`;

const NavigationRoutes = styled.ul`
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin: 0 50px;
`;

const NavigationContact = styled(NavigationRoutes)`
  font-weight: bolder;
  justify-content: center;
  & > :first-child {
    width: 270px;
  }
`;

const NavElement = styled.li`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 140px;
  height: 100%;
  font-size: 20px;
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
