import React from 'react';
//@ts-ignore
import Folha from '../../../public/img/folhas.png';
//@ts-ignore
import BackgroundImg from '../../../public/img/main_gif.gif';
//@ts-ignore
import LogoMenu from '../../../public/img/logo_menu.png';
import Menu from '../../components/Menu';
import createChatbot from '../../services/chatbot';
import { Background, Content, ImgConfig, ImgContent } from './styled';

export const AdultChat: React.FC = () => {
  createChatbot(window.location.pathname);
  return (
    <Background img={BackgroundImg}>
      <Menu dimension={{ w: 95, h: 10 }} />
      <Content>
        <div>
          <ImgContent>
            <img src={LogoMenu} />
          </ImgContent>
          <h1>
            Que bom te ter de volta por aqui!
            <br />
            Estou pronto para te ajudar!
          </h1>
        </div>
      </Content>
      <ImgConfig src={Folha} />
    </Background>
  );
};
