import React from 'react';
import GradientBackground from '../../../components/GradientBackground';
import GovImg from '../../../../public/img/gov_icon.png';
import LogoutImg from '../../../../public/img/logout_icon.svg';

import {
  Container,
  HeaderContent,
  ImgAndTitleConteiner,
  LogoutRegion,
  Content,
  StyledFooter,
} from './styles';

interface Props {
  subtitle?: string;
  mainContent: React.ReactNode;
}

const PrivateLayout: React.FC<Props> = ({ subtitle, mainContent }: Props) => {
  return (
    <div>
      <Container>
        <GradientBackground dimension={{ w: 100, h: 37 }}>
          <HeaderContent>
            <ImgAndTitleConteiner>
              <img src={GovImg}></img>
              <h2>{subtitle}</h2>
            </ImgAndTitleConteiner>

            <label>meu perfil (administrador)</label>

            <LogoutRegion>
              <img src={LogoutImg}></img>

              <a href="#">sair</a>
            </LogoutRegion>
          </HeaderContent>
        </GradientBackground>

        <Content>{mainContent}</Content>

        <StyledFooter>
          © 2022 Sistema Estadual de Gestão Educacional
        </StyledFooter>
      </Container>
    </div>
  );
};

export default PrivateLayout;
