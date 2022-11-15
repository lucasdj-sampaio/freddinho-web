import styled from 'styled-components';

interface Props {
  img: string;
}

export const Background = styled.div<Props>`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url(${Props => Props.img});
`;

export const ImgConfig = styled.img`
  height: 70vh;
  opacity: 50%;
`;

export const Content = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
