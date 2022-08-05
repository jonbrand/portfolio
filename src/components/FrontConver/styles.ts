import styled from 'styled-components';

export const FrontCoverContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TerminalComponent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 15rem auto;
  background-color: var(--background-terminal);
  border-radius: 1rem;

  width: 46rem;
  height: 30rem;

  @media screen and (max-width: 1000px) {
    width: 40rem;
  }

  @media screen and (max-width: 900px) {
    width: 35rem;
    height: 25rem;
  }

  @media screen and (max-width: 700px) {
    width: 30rem;
    height: 25rem;
  }

  @media screen and (max-width: 600px) {
    width: 24rem;
    height: 25rem;
  }

`;

export const Navbar = styled.div`
  background-color: var(--gray-light);
  width: 100%;
  height: 1.5rem;

  border-radius: .5rem;
  border: .1rem solid var(--gray);
  padding: 1rem;
  
  display: flex;
  align-items: center;
  justify-content: left;
`;

export const Title = styled.h1`
  display: flex;
  align-items: baseline;
  color: var(--green-light);
  
  font-size: 3rem;
  padding: .5rem;
  margin-top: 3rem;
  
  font-family: 'VT323', monospace;

  @media screen and (max-width: 900px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 700px) {
    font-size: 2.1rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.7rem;
  }
`;

export const SubTitle = styled.h2`
  display: flex;
  align-items: baseline;
  color: var(--gray-light);

  font-size: 1.7rem;
  font-weight: 400;

  margin-top: 1.5rem;
  margin-bottom: .5rem;
  
  font-family: 'VT323', monospace;

  @media screen and (max-width: 900px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 700px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }

`;

export const BlinkingTextSelector = styled.div`
  display: inline;

  ::after {
    content: '|';
    font-size: 2.5rem;
    font-weight: 400 !important;

    color: var(--purple);
    animation: blink 0.5s step-start infinite;

    @keyframes blink {
      50% {
        opacity: 0;
      }
    }
  }
`;

export const Works = styled.h1`
  color: var(--gray-light);

  font-size: 3.5rem;
  max-width: 1120px;

  display: flex;
  align-items: center;
  justify-content: center;
`;