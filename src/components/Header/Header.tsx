import { Nav, NavbarContainer, NavBtn, NavLinks, NavLogo, NavMenu, NavItem, NavBtnLink, MobileIcon } from './styles';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { useEffect, useState } from 'react';

export const Header = ({ toggle }: any) => {
  const [scrollNav, setScrollNav] = useState<any>(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);
  
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  const toggleFooter = () => {
    scroll.scrollToBottom();
  }
  
  return (
   <>
     <Nav >
        <NavbarContainer scrollNav={scrollNav}>
          <NavLogo to='/' onClick={toggleHome}>Brandão</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks 
                to='works'
                smooth={true} 
                duration={500} 
                spy={true} 
                offset={-80}
              >
                Trabalhos
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to='technologies'
                smooth={true} 
                duration={500} 
                spy={true} 
                offset={-80}
              >
                Tecnologias
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to='about'
                smooth={true} 
                duration={500} 
                spy={true} 
                offset={-80}
              >
                Sobre mim
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to='blog'
                smooth={true} 
                duration={500} 
                spy={true} 
                offset={-80}
              >
                Blog
              </NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnLink 
                to='contact'
                onClick={toggleFooter}
              >
                Contato
              </NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
   </>
  )
}