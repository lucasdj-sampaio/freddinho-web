import React from 'react';
import { HiBellAlert } from 'react-icons/hi2';
import { IoHome } from 'react-icons/io5';
//@ts-ignore
import { useSelector } from 'react-redux';
import { navigate } from 'vite-plugin-ssr/client/router';
import GirlProfileImg from '../../../public/img/girl.png';
import { RootState } from '../../store';
import { Dimension, GradientDiv, MenuContent } from './styles';

interface Props {
  dimension: Dimension;
}

const Menu: React.FC<Props> = ({ dimension }: Props) => {
  const reducer = useSelector((state: RootState) => state.profiles);

  return (
    <GradientDiv dimensionInPorcent={dimension}>
      <MenuContent>
        <IoHome onClick={() => navigate((window.location.href = '/perfis'))} />
        <HiBellAlert />
        <img src={GirlProfileImg} />
        <h3>Joana</h3>
      </MenuContent>
    </GradientDiv>
  );
};

export default Menu;
