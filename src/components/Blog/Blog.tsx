import { BlogContainer, BlogWrapper, Title, Text } from "./styles"
import Maintenance from '../../images/maintenance.png';

export const Blog = ({ id }: any) => {
  return (
    <BlogContainer id={id}>
      <Title>Blog</Title>
      <BlogWrapper>
        <img src={Maintenance} alt="manutenção" />
        <Text>
          <strong>Página em desenvolvimento!</strong>
        </Text>
      </BlogWrapper>
      
    </BlogContainer>
  )
}