import React from 'react';
import { StyledImput, LabelForInput, Container } from './styles';

interface Props {
  label?: string;
}

export const Input: React.FC<Props> = ({ label }: Props) => {
  return label != null ? (
    <Container>
      <LabelForInput>{label}</LabelForInput>
      <StyledImput></StyledImput>
    </Container>
  ) : (
    <StyledImput></StyledImput>
  );
};

export default Input;
