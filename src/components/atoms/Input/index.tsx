import React from 'react';
import { Container, LabelForInput, StyledImput } from './styles';

interface Props {
  label?: string;
  name?: string;
  type?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<Props> = ({
  label,
  name,
  type,
  required,
  onChange,
}: Props) => {
  return label != null ? (
    <Container>
      <LabelForInput>{label}</LabelForInput>
      <StyledImput
        name={name}
        type={type}
        required={required}
        onChange={onChange}
      ></StyledImput>
    </Container>
  ) : (
    <StyledImput></StyledImput>
  );
};

export default Input;
