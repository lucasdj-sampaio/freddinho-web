import React from 'react';
//@ts-ignore
import Folha from '../../../public/img/folhas.png';
//@ts-ignore
import BackgroundImg from '../../../public/img/main_gif.gif';
import ProfileCard from '../../components/ProfileCard';
import { ProfileType } from '../../shared/types/Profile';
import { Background, Content, ImgConfig } from './styled';

interface Profile {
  users: ProfileType[];
}

const userTeste = {
  users: [
    { id: 1, name: 'Thomas', birthYear: 2020, gender: 'M' },
    { id: 2, name: 'Joana', birthYear: 2019, gender: 'F' },
  ],
} as Profile;

export const Profile: React.FC = () => {
  return (
    <Background img={BackgroundImg}>
      <ImgConfig src={Folha} />

      <Content>
        <ProfileCard profiles={userTeste.users} />
      </Content>
    </Background>
  );
};
