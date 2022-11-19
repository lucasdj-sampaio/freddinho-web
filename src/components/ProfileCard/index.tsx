import React from 'react';
import { useDispatch } from 'react-redux';
import { navigate } from 'vite-plugin-ssr/client/router';
import { ProfileType } from '../../shared/types/Profile';
import { Content, UserContent, UserGroup } from './styled';
//@ts-ignore
import BoyProfileImg from '../../../public/img/boy.png';
//@ts-ignore
import GirlProfileImg from '../../../public/img/girl.png';
import { setActiveProfile } from '../../store/slices/profile';

interface Props {
  profiles: ProfileType[];
}

export const Profile: React.FC<Props> = ({ profiles }: Props) => {
  const dispath = useDispatch();

  return (
    <Content>
      <h1>QUEM ESTÁ UTILIZANDO?</h1>

      <UserGroup cardsize={profiles.length}>
        {profiles.map((p, i) => {
          return (
            <UserContent
              key={i}
              onClick={() => {
                dispath(setActiveProfile({ dependent: p }));
                navigate((window.location.href = '/menu'));
              }}
            >
              {p.gender === 'M' ? (
                <img src={BoyProfileImg} />
              ) : (
                <img src={GirlProfileImg} />
              )}

              <label>{p.name}</label>
            </UserContent>
          );
        })}
      </UserGroup>
    </Content>
  );
};

export default Profile;
