import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { 
  FooterContainer, 
  FooterWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  Logo,
} from './styles';

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <Logo to='/'>
            Brandão
          </Logo>
          <WebsiteRights>
            Brandão © {new Date().getFullYear()} Todos os direitos reservados
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='https://github.com/jonbrand' target='_blank' aria-label='Github'>
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink href='https://www.instagram.com/jon_brand/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='https://www.linkedin.com/in/jonatas-brand%C3%A3o/' target='_blank' aria-label='Linkedin'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </FooterWrap>
      </FooterContainer>
    </>
  )
}