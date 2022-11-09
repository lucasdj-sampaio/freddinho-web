import styled from 'styled-components';

interface Props {
  backgroundImg: string;
}

export const Background = styled.main<Props>`
  background-image: url(${props => props.backgroundImg});
  display: flex;
`;

export const CenterLeftContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 25px;
`;

export const LeftContent = styled.div`
  h1 {
    margin-top: 94px;
    margin-bottom: 70px;
    font-weight: bold;
    font-size: 39px;
    color: var(--background);
    text-align: center;
  }

  display: flex;
  justify-content: center;
`;

export const RightContent = styled.div`
  img {
    height: 50vh;
  }
`;
