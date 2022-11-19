import React from 'react';
//@ts-ignore
import LogoMenu from '../../../public/img/logo_menu.png';
//@ts-ignore
//@ts-ignore
import { VscPlayCircle } from 'react-icons/vsc';
import { navigate } from 'vite-plugin-ssr/client/router';
import BackgroundImg from '../../../public/img/main_gif.gif';
import Button from '../../components/atoms/Button';
import BoxBackground from '../../components/BoxBackground';
import Menu from '../../components/Menu';
import { Background, ButtonContent, Content, ImgContent } from './styled';

export const AdultMenu: React.FC = () => {
  return (
    <Background img={BackgroundImg}>
      <Menu dimension={{ w: 95, h: 10 }} />
      <Content>
        <BoxBackground dimension={{ w: 40, h: 80 }}>
          <ImgContent>
            <img src={LogoMenu} />
          </ImgContent>
          <h1>Olá, Joana!</h1>
          <h2>
            Que bom te ter de volta aqui! <br />
            Deseja retomar o chat de onde parou?
          </h2>
          <ButtonContent>
            <Button
              variant="primary"
              size="medium"
              onClick={() => navigate((window.location.href = '/chat'))}
            >
              COMEÇAR <VscPlayCircle />
            </Button>
          </ButtonContent>
        </BoxBackground>
      </Content>
    </Background>
  );
};
