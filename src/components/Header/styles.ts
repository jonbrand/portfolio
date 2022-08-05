import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav<any>`
  display: flex;
  justify-content: center;

  position: fixed;
  left: 0;
  right: 0;

  top: 0;
  height: 80px;
  align-items: center;

  font-size: .9rem;
  z-index: 999;
  border-bottom: .1rem solid var(--gray);
  
  background-color: var(--background);
  align-items: center;
  

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div<any>`
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  
  padding: 0 24px;
  display: flex;
  align-items: center;
  
  max-width: 1100px;
  height: 4rem;

`;

export const NavLogo = styled(LinkRouter)`
  color: var(--green-light);
  justify-self: flex-start;
  cursor: pointer;

  font-size: 1.3rem;
  display: flex;
  align-items: center;

  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  text-decoration: none;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  text-align: center;
  margin-left: -110px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  width: 0;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1.5rem;

    right: 4rem;
    font-size: 1.8rem;
    cursor: pointer;
    
    color: #fff;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  color: var(--title);
  display: flex;
  align-items: center;

  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  
  cursor: pointer;
  position: relative;
  font-weight: bold;

  ::after {
    content: " ";
    width: 100%;
    transform: scaleX(0);
    height: .1rem;

    background-color: var(--pink);
    position: absolute;
    bottom: .1rem;

    left: 0;
    transition: 0.5s ease-in-out;
  }

  :hover::after {
    transform: scaleX(1);
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkScroll)`
  border-radius: .5rem;
  background: var(--pink);
  padding: .4rem 1rem;
  
  color: var(--background);
  font-size: 1rem;
  cursor: pointer;
  
  text-decoration: none;
  transition: 0.6s;
  display: flex;

  font-weight: 700;
  justify-content: center;
  align-items: center;

  margin-left: 2rem;

  &:hover {
    transition: all 0.6s ease-in-out;
    background: var(--green-light);
    transform: translateY(-2px);
    
    color: var(--pink-light);
  }
`;

