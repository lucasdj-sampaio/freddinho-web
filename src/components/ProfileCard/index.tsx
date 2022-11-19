import React from 'react';
import { ProfileType } from '../../shared/types/Profile';
import { Content, UserContent, UserGroup } from './styled';
//@ts-ignore
import BoyProfileImg from '../../../public/img/boy.png';
//@ts-ignore
import { useDispatch } from 'react-redux';
import GirlProfileImg from '../../../public/img/girl.png';
import { setActiveProfile } from '../../store/reducers/profileReducer';

interface Props {
  profiles: ProfileType[];
}

export const Profile: React.FC<Props> = ({ profiles }: Props) => {
  const dispath = useDispatch();

  return (
    <Content>
      <h1>QUEM ESTÁ UTILIZANDO?</h1>

      <UserGroup>
        {profiles.map((p, i) => {
          return (
            <UserContent onClick={() => dispath(setActiveProfile(p))}>
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
