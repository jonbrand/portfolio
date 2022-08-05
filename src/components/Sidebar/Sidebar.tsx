import { useEffect, useState } from 'react';
import { 
  SidebarContainer,
  Icon, 
  CloseIcon, 
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute
  } from './styles';
  import { animateScroll as scroll } from 'react-scroll';
  
  export const Sidebar = ({ isOpen, toggle }: any) => {

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

  const toggleFooter = () => {
    scroll.scrollToBottom();
  }

    return (
      <SidebarContainer scrollNav={scrollNav} isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
            <CloseIcon />
          </Icon>
          <SidebarWrapper>
            <SidebarMenu>
              <SidebarLink to='works' onClick={toggle}>Trabalhos</SidebarLink>
              <SidebarLink to='technologies' onClick={toggle}>Tecnologias</SidebarLink>
              <SidebarLink to='about' onClick={toggle}>Sobre mim</SidebarLink>
              <SidebarLink to='blog' onClick={toggle}>Blog</SidebarLink>
            </SidebarMenu>
            <SidebarBtnWrap>
              <SidebarRoute to='contact' onClick={toggleFooter}>Contato</SidebarRoute>
            </SidebarBtnWrap>
          </SidebarWrapper>
      </SidebarContainer>
    )
  }