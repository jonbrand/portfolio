import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: var(--background);
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Logo = styled(Link)`
  color: var(--green-light);
  justify-self: start;
  cursor: pointer;

  text-decoration: none;
  font-size: 1.5rem;
  display: flex;

  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
`;

export const WebsiteRights = styled.small`
  color: var(--title);
  display: flex;
  align-items: center;

  @media screen and (max-width: 680px) {
    margin-left: 2rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 4.5rem;

  margin-right: 1rem;
  align-items: center;
  
  @media screen and (max-width: 680px) {
    gap: 1rem;
  }
`;

export const SocialIconLink = styled.a`
  color: var(--title);
  font-size: 24px;
`;