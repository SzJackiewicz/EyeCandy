import React from "react";
import styled from "styled-components";
import InstagramIcon from "../../assets/icons/instagramIcon";
import FacebookIcon from "../../assets/icons/facebookIcon";

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
        <IconsContainer>
          <InstagramIcon />
          <FacebookIcon />
        </IconsContainer>
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
  font-size: 22px;
  font-weight: bolder;
  color: ${({ theme }) => theme.color.light};
  font-family: ${({ theme }) => theme.font.family.switzer};
  letter-spacing: 2px;
  cursor: pointer;
  &:hover {
    transition: 0.5s all ease;
    transform: scale(1.25);
    color: ${({ theme }) => theme.color.darkPink};
  }
  &:first-child {
    color: ${({ theme }) => theme.color.darkPink};
  }
`;

const IconsContainer = styled.li`
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  width: 100px;
  height: 100%;
  z-index: 2;
  margin: 0 20px 0 40px;
  gap: 20px;
  cursor: pointer;
  & > :hover {
    transition: 0.5s all ease;
    transform: scale(1.25);
  }
`;

export default Navigation;
