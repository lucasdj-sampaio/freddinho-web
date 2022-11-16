import React from 'react';
import { useSelector } from 'react-redux';
//@ts-ignore
import Folha from '../../../public/img/folhas.png';
//@ts-ignore
import BackgroundImg from '../../../public/img/main_gif.gif';
import ProfileCard from '../../components/ProfileCard';
import { RootState } from '../../store';
import { Background, Content, ImgConfig } from './styled';

export const Profile: React.FC = () => {
  const profiles = useSelector((state: RootState) => state.profiles);

  return (
    <Background img={BackgroundImg}>
      <ImgConfig src={Folha} />

      <Content>
        <ProfileCard profiles={profiles.users} />
      </Content>
    </Background>
  );
};
