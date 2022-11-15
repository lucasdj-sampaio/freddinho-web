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
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 50vw;
`;

export const LeftContent = styled.div``;

export const RightContent = styled.div`
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

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 50vw;
`;
