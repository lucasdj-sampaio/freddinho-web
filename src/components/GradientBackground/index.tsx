import React from 'react';
import { GradientDiv, Dimension } from './styles';

interface Props {
  dimension: Dimension;
  children: React.ReactNode;
}

const GradientBackground: React.FC<Props> = ({
  dimension,
  children,
}: Props) => {
  return <GradientDiv dimensionInPorcent={dimension}>{children}</GradientDiv>;
};

export default GradientBackground;
