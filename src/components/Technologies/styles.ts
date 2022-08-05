import styled from "styled-components";

export const TechnologiesContainer = styled.div`
  height: 56rem;
  display: grid;
  grid-template-columns: 1fr;
  
  grid-template-rows: 20vh 30vh 20vh 30vh;
  background: var(--background);
  width: 100%;
  
  margin-bottom: 2rem;
  justify-content: center;


  @media screen and (max-width: 1000px) {
    height: 85rem;
  }

  @media screen and (max-width: 800px) {
    height: 145rem;
  }
`;

export const TechnologiesH1 = styled.h1`
  font-size: 2.5rem;
  color: var(--gray-light);

  display: grid;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const TechnologiesWrapper = styled.div`
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
    padding: 0 200px;
  }
`;

export const TechnologiesCard = styled.div`
  background: var(--pink);
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;

  padding: 30px;
  box-shadow: 8px 10px var(--purple);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const TechnologiesIcon = styled.img`
  margin-bottom: 10px;
`