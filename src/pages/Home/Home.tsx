import { Header } from "../../components/Header/Header";
import { FrontCover } from '../../components/FrontConver/FrontCover';
import { useState } from "react";
import { Portfolio } from "../../components/Works/Works";
import { worksObj } from '../../components/Works/data';
import * as S from './styles';
import { MyProfile } from '../../components/MyProfile/MyProfile';
import { Technologies } from '../../components/Technologies/Technologies';
import { Footer } from '../../components/Footer/Footer';
import { tecnologyObj } from '../../components/Technologies/data';
import { myProfileObj } from '../../components/MyProfile/data';
import { frontCoverObj } from '../../components/FrontConver/data';
import { Blog } from '../../components/Blog/Blog';
import { blogObj } from '../../components/Blog/data';
import { Sidebar } from "../../components/Sidebar/Sidebar";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      
      <S.Container>
        <S.FixedContent>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Header toggle={toggle} />
        </S.FixedContent>

        <S.PageContent>
          <FrontCover {...frontCoverObj} />
          <Portfolio {...worksObj} />
          <Technologies {...tecnologyObj} />
          <MyProfile {...myProfileObj} />
          <Blog {...blogObj} />
          <Footer />
        </S.PageContent>
      </S.Container>
    </>
  );
}