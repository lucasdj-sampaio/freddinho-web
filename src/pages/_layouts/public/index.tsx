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
        <GradientBackground dimension={{ w: 35, h: 93 }}>
          <LeftContent>{leftContent}</LeftContent>
        </GradientBackground>
      </CenterLeftContent>

      <RightContent>{rightContent}</RightContent>
    </Background>
  );
};

export default PublicLayout;
