import styled from 'styled-components';

export const Container = styled.div`
  width: 30vw;
`;

export const Content = styled.div`
  width: 23vw;
`;

export const ImgContent = styled.div`
  display: flex;
  justify-content: center;
  margin: 34px 0;

  img {
    width: 300px;
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
