import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vw;
  height: 100vh;
`;

export const Content = styled.div`
  padding: 0px 19%;

  img {
    width: 160px;
    margin-top: 38px;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 35% 35% 24%;
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin-top: 18px;
  }
`;
