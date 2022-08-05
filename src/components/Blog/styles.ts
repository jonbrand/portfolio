import styled from "styled-components";

export const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 25vh 50vh 35vh;
  
  background: var(--background);
  height: 56rem;
  width: 100%;

  border-bottom: .1rem solid var(--gray);
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

export const BlogWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;

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
    height: 55vh;

    @media screen and (max-width: 1000px) {
      border-radius: 50%;
      height: 50vh;
    }

    @media screen and (max-width: 700px) {
      border-radius: 50%;
      height: 35vh;
    }
  }
`;

export const Text = styled.h1`
  font-size: 1.3rem;
  font-weight: 400;

  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
  }

  
`;