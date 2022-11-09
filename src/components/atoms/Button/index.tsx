import React from 'react';
import { StyledButton, ButtonVariant, ButtonSize } from './styles';

interface Props {
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  image?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<Props> = ({
  type,
  variant,
  size,
  children,
  image,
  onClick,
}: Props) => {
  return (
    <StyledButton type={type} variant={variant} size={size} onClick={onClick}>
      {children} {image != null ? <img src={image} /> : null}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  onClick: () => {},
};

export default Button;
