import styled from 'styled-components';

export const BackgroundModal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModal = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  background-color: var(--background);
  width: 30%;
  border-radius: 20px;
  text-align: center;
  padding: 20px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;

  svg {
    color: var(--primary-color);
    font-size: 23px;

    :hover {
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.8);
    }
  }
`;

export const ModalImg = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    width: 108px;
  }
`;

export const ModalContent = styled.div`
  color: var(--secundary-font-color);

  h2 {
    color: (--primary-color);
    font-size: 16px;
    font-weight: 700;
    margin: 10px 0;
  }

  label {
    font-size: 14px;
  }
`;
