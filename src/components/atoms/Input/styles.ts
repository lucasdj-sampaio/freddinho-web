import styled from 'styled-components';

export const StyledImput = styled.input`
  margin-top: 8px;
  margin-bottom: 30px;
  width: 100%;
  height: 32px;
  border-radius: 28px;
  border-style: solid;
  padding: 0 15px;
  font-size: 12px;
  border-width: 1.5px;
  border-color: var(--tertiary-color);
  background-color: var(--secundary-background);

  :focus {
    border-color: var(--primary-color);
  }
`;

export const LabelForInput = styled.label`
  color: var(--tertiary-color);
  font-weight: 500;
  font-size: 18;
`;

export const Container = styled.div`
  display: grid;
`;
