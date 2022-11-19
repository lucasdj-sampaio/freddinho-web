import styled from 'styled-components';

interface Props {
  img: string;
}

export const Background = styled.div<Props>`
  width: 100vw;
  height: 100vh;
  background-image: url(${Props => Props.img});
`;

export const MenuContent = styled.div`
  display: grid;
  justify-content: end;
  grid-template-columns: 3% 3% 6% 10%;
  grid-template-rows: 1fr;
  align-items: center;
  color: var(----primary-color);
  font-size: 20px;
  img {
    margin-top: 5px;
    width: 60px;
  }
  h3 {
    font-weight: 700;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 39px;
    color: var(--background);
    text-align: center;
  }

  h2 {
    font-weight: bold;
    font-size: 15px;
    color: var(--background);
    text-align: center;
  }

  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100vw;
`;

export const BoxBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgContent = styled.div`
  display: flex;
  justify-content: center;
  margin: 34px 0;

  img {
    width: 150px;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 18px;
    font-weight: 600;
  }
`;
