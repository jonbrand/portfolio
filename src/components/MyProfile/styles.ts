import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 25vh 50vh 15vh;
  
  background: var(--background);
  height: 56rem;
  width: 100%;

  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--gray-light);
  display: grid;

  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const HeroWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;

  justify-items: center;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  grid-gap: 16px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  > img {
    border-radius: 50%;
    height: 25vh;

    @media screen and (max-width: 880px) {
      border-radius: 50%;
      height: 20vh;
    }

    @media screen and (max-width: 800px) {
      border-radius: 50%;
      height: 18vh;
    }

    @media screen and (max-width: 600px) {
      border-radius: 50%;
      height: 15vh;
    }

  }
`;

export const Text = styled.h1`
  font-size: 1.3rem;
  font-weight: 400;
  padding: 0 2rem;

  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;