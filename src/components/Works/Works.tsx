import { 
  PortfolioContainer, 
  Title, 
  PortfolioWrapper, 
  PortfolioCard, 
  PortfolioIcon, 
  ServiceH2, 
  PortfolioP
} from './styles';
import img01 from '../../images/image-1.png';
import img02 from '../../images/image-2.png';
import img03 from '../../images/image-3.png';

export const Portfolio = ({
  id,
  topLine,
  headlineOne,
  headlineTwo,
  headlineThree,
  descriptionOne,
  descriptionTwo,
  descriptionThree,
}: any) => {
  return (
    <>
      <PortfolioContainer id={id}>
        <Title>{topLine}</Title>
        <PortfolioWrapper>
          <PortfolioCard>
            <PortfolioIcon>
              
              <a href='https://handmade-jewelry-3j009wztb-jonbrand.vercel.app/'>
                <img src={img01} alt='joalheria' />
              </a>
            </PortfolioIcon>
            <ServiceH2>{headlineOne}</ServiceH2>
            <PortfolioP>{descriptionOne}</PortfolioP>
          </PortfolioCard>
          <PortfolioCard>
            <PortfolioIcon>
              <a href='https://imobiliaria-4kl0cjk1h-jonbrand.vercel.app/'>
                <img src={img02} alt='imobiliaria' />
              </a>
            </PortfolioIcon>
            <ServiceH2>{headlineTwo}</ServiceH2>
            <PortfolioP>{descriptionTwo}</PortfolioP>
          </PortfolioCard>
          <PortfolioCard>
            <PortfolioIcon>
              <a href='https://sorteador-de-amigo-secreto-delta.vercel.app/'>
                <img src={img03} alt='sorteador' />
              </a>
            </PortfolioIcon>
            <ServiceH2>{headlineThree}</ServiceH2>
            <PortfolioP>{descriptionThree}</PortfolioP>
          </PortfolioCard>
        </PortfolioWrapper>
      </PortfolioContainer>
    </>
  )
}