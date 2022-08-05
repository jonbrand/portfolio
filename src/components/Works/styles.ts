import styled from "styled-components";

export const PortfolioContainer = styled.div`
  width: 100%;
  height: 56rem;
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 25vh 50vh 15vh;
  background: var(--background);

  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    height: 1200px;
  }

  @media screen and (max-width: 480px) {
    height: 1400px;
  }
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

export const PortfolioWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const PortfolioCard = styled.div`
  background: var(--pink-light);
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;

  max-height: 340px;
  padding: 30px;
  box-shadow: 8px 10px var(--purple);

  transition: all 0.2s ease-in-out;
  color: var(--background);

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const PortfolioIcon = styled.div`
  > img {
    height: 200px;
    width: 250px;
    margin-bottom: 10px;

    border-radius: 0.625rem;
  }
`;

export const ServiceH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const PortfolioP = styled.p`
  font-size: 1rem;
  text-align: center;
`;