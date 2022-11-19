import styled from 'styled-components';

interface Props {
  img: string;
}

export const Background = styled.div<Props>`
  width: 100vw;
  height: 100vh;
  background-image: url(${Props => Props.img});
`;

export const ImgConfig = styled.img`
  display: block;
  height: 70vh;
  opacity: 50%;
`;

export const ImgContent = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 150px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  align-items: center;
  width: 50vw;
  height: 90vh;
  z-index: 1;

  h1 {
    font-weight: bold;
    font-size: 15px;
    color: var(--font-color);
    text-align: center;
  }
`;
