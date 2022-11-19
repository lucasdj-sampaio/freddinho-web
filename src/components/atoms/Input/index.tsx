import React from 'react';
import { Container, LabelForInput, StyledImput } from './styles';

interface Props {
  label?: string;
  name?: string;
  required?: boolean;
  type?: string;
}

export const Input: React.FC<Props> = ({
  label,
  name,
  type,
  required,
}: Props) => {
  return label != null ? (
    <Container>
      <LabelForInput>{label}</LabelForInput>
      <StyledImput name={name} required={required} type={type}></StyledImput>
    </Container>
  ) : (
    <StyledImput></StyledImput>
  );
};

export default Input;
