import styled from 'styled-components';

export const Content = styled.div`
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
  .modal {
    background-color: var(--modal-color);
    color: var(--secundary-font-color);
    width: 30%;
    height: 20%;
    border-radius: 20px;
    text-align: center;
    .close {
      background-color: transparent;
      border: none;
      outline: none;
      width: 32px;
      height: 32px;
      color: var(--secundary-font-color);
      display: block;
      right: calc(-100% + 50px);
      position: relative;
      margin-bottom: 3%;
    }
  }
`;
