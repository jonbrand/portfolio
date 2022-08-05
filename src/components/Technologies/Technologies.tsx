import { 
  TechnologiesContainer, 
  TechnologiesH1, 
  TechnologiesWrapper, 
  TechnologiesCard,
  TechnologiesIcon,
} from './styles';
import react from '../../images/react.svg';
import grapql from '../../images/graphql.svg';
import nodejs from '../../images/nodejs.svg';
import linux from '../../images/tux.svg';
import azure from '../../images/azure.svg';
import mongodb from '../../images/mongodb.svg';
import cypress from '../../images/cypress.svg';
import jest from '../../images/jest.svg';
import apollo from '../../images/apollo.svg';


export const Technologies = ({
  id,
  topLine,
}: any) => {
  return (
    <>
      <TechnologiesContainer id={id}>
        <TechnologiesH1>{topLine}</TechnologiesH1>
        <TechnologiesWrapper>
          <TechnologiesCard>
            <TechnologiesIcon src={react} alt='ReactJS' />
          </TechnologiesCard>
          <TechnologiesCard>
            <TechnologiesIcon src={grapql} alt='icone grapql' />
          </TechnologiesCard>
          <TechnologiesCard>
            <TechnologiesIcon src={nodejs} alt='icone grapql' />
          </TechnologiesCard>
          <TechnologiesCard>
            <TechnologiesIcon src={linux} alt='icone grapql' />
          </TechnologiesCard>
          <TechnologiesCard>
            <TechnologiesIcon src={azure} alt='icone grapql' />
          </TechnologiesCard>
          <TechnologiesCard>
            <TechnologiesIcon src={mongodb} alt='icone grapql' />
          </TechnologiesCard>
          <TechnologiesCard>
            <TechnologiesIcon src={cypress} alt='icone grapql' />
          </TechnologiesCard>
          <TechnologiesCard>
            <TechnologiesIcon src={jest} alt='icone grapql' />
          </TechnologiesCard>
          <TechnologiesCard>
            <TechnologiesIcon src={apollo} alt='icone grapql' />
          </TechnologiesCard>
        </TechnologiesWrapper>
      </TechnologiesContainer>
    </>
  )
}