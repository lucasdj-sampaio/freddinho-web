import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'outline' | 'disabled';
export type ButtonSize = 'min' | 'medium' | 'big';

interface Props {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const StyledButton = styled.button<Props>`
  padding: 10px;
  border-radius: 28px;
  align-items: center;
  display: grid;
  grid-template-columns: 41% 53%;
  text-align: start;
  justify-content: center;

  svg {
    color: var(--Background);
    font-size: 18px;
  }

  ${({ size }) => {
    switch (size) {
      case 'min':
        return css`
          width: 142px;
          height: 30px;
        `;
      case 'medium':
        return css`
          width: 224px;
        `;
      case 'big':
        return css`
          height: 48px;
          width: 365px;
        `;
      default:
        return css`
          width: 100%;
        `;
    }
  }}

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          color: var(--sub-title);
          background-color: var(--primary-color);
          border: none;
          box-shadow: rgb(220 220 220);

          :hover {
            background-color: var(--gradient-color-middle);
          }
        `;
      case 'outline':
        return css`
          color: var(--secundary-color);
          background-color: var(--secundary-background);
          border-color: var(--secundary-color);
          border-style: solid;

          :hover {
            background-color: var(--secundary-color);
            color: var(--sub-title);
          }
        `;
      case 'disabled':
        return css`
          color: var(--tertiary-color);
          background-color: var(--disabled-color);
        `;
      default:
        return null;
    }
  }}
`;
