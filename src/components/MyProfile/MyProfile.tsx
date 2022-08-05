import { 
  HeroContainer,
  HeroWrapper,
  Text,
  Title, 
} from './styles';
import MyPhoto from '../../images/my_photo.jpeg';

export const MyProfile = ({ id }: any) => {
  return (
    <HeroContainer id={id}>
      <Title>Sobre Mim</Title>
      <HeroWrapper>
        <img src={MyPhoto} alt="foto de perfil" />

        <Text>
          Desenvolvo aplicações web com as tecnologias NodeJS, 
          ReactJS, Typescript. Sou uma pessoa com facilidade em adaptação, pois 
          passei por uma transição de carreira a partir da área contábil para a de 
          desenvolvimento de software, por ser a área que esta transformando o mundo 
          em diversos aspectos!
        </Text>
      </HeroWrapper>
    </HeroContainer>
  )
};