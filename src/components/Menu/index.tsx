import React from 'react';
import { HiBellAlert } from 'react-icons/hi2';
import { IoHome } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { navigate } from 'vite-plugin-ssr/client/router';
//@ts-ignore
import BoyProfileImg from '../../../public/img/boy.png';
//@ts-ignore
import GirlProfileImg from '../../../public/img/girl.png';
import { RootState } from '../../store';
import { Dimension, GradientDiv, MenuContent } from './styles';

interface Props {
  dimension: Dimension;
}

const Menu: React.FC<Props> = ({ dimension }: Props) => {
  const reducer = useSelector((state: RootState) => state.profile);

  return (
    <GradientDiv dimensionInPorcent={dimension}>
      <MenuContent>
        <IoHome onClick={() => navigate((window.location.href = '/perfis'))} />
        <HiBellAlert />
        <img
          src={
            reducer.activeProfile.gender === 'M'
              ? BoyProfileImg
              : GirlProfileImg
          }
        />
        <h3>{reducer.activeProfile.name}</h3>
      </MenuContent>
    </GradientDiv>
  );
};

export default Menu;
