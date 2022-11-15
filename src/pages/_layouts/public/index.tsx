import React from 'react';
//@ts-ignore
import BackgroundImg from '../../../../public/img/main_gif.gif';
import GradientBackground from '../../../components/GradientBackground';
import {
  Background,
  CenterLeftContent,
  LeftContent,
  RightContent,
} from './styles';

interface Props {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const PublicLayout: React.FC<Props> = ({
  leftContent,
  rightContent,
}: Props) => {
  return (
    <Background backgroundImg={BackgroundImg}>
      <CenterLeftContent>
        <LeftContent>{leftContent}</LeftContent>
      </CenterLeftContent>

      <GradientBackground dimension={{ w: 50, h: 100 }}>
        <RightContent>{rightContent}</RightContent>
      </GradientBackground>
    </Background>
  );
};

export default PublicLayout;
