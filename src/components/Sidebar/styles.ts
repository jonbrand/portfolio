import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkRouter } from 'react-router-dom';

export const SidebarContainer = styled.aside<any>`
  height: 100%;
  z-index: 999;
  width: 100%;

  display: grid;
  background: var(--background);
  border-right: .1rem solid var(--gray);

  margin-top: 80px;
  position: fixed;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};

  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  align-items: center;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);

  text-align: center;
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;

  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: var(--green-light);

  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: var(--pink);
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkRouter)`
  border-radius: .5rem;
  background: var(--pink);
  padding: 1rem 2.5rem;
  
  color: var(--background);
  font-size: 1.2rem;
  cursor: pointer;
  
  text-decoration: none;
  transition: 0.6s;

  font-weight: 700;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all 0.6s ease-in-out;
    background: var(--green-light);
    transform: translateY(-2px);
    
    color: var(--pink-light);
  }
`;
