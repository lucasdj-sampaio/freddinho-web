import React from 'react';
import StyledCardItem from './styles';

interface Props {
  children: React.ReactNode;
}

const CardItem: React.FC<Props> = ({ children }: Props) => {
  return <StyledCardItem>{children}</StyledCardItem>;
};

export default CardItem;
