import { useTypedText } from '../../hooks/useTypedText';
import { FrontCoverContainer, Navbar, SubTitle, Title, BlinkingTextSelector, TerminalComponent } from './styles';
import { IoCloseCircleOutline, IoChevronBackCircleSharp, IoHeartCircleSharp } from 'react-icons/io5';

const typingTitleText = 'Olá, me chamo Jonatas Brandão'
const typingSubTitleText = 'Sou um desenvolvedor fullstack orientado a soluções!';

export const FrontCover = ({ id }: any) => {
  const [typingTitle, typingTitleTypingConcluded] = useTypedText(typingTitleText);
  const [typingSubTitle, typingSubTitleTypingConcluded] = useTypedText(typingSubTitleText, typingTitleTypingConcluded);

  return (
    <FrontCoverContainer id={id}>
      <TerminalComponent>
        <Navbar>
          <IoCloseCircleOutline color='red' size={24} />
          <IoChevronBackCircleSharp color='yellow' size={24} />
          <IoHeartCircleSharp color='green' size={24} />
        </Navbar>

        <Title>
          ${'> '}
          {typingTitle}
          {!typingTitleTypingConcluded && <BlinkingTextSelector />}
        </Title>
        <SubTitle>
          {typingSubTitle}
          {typingTitleTypingConcluded && !typingSubTitleTypingConcluded && <BlinkingTextSelector />}
        </SubTitle>
        {typingTitleTypingConcluded && typingSubTitleTypingConcluded && <BlinkingTextSelector />}
      </TerminalComponent>
    </FrontCoverContainer>
  )
}