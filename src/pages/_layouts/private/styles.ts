import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 37vh 59vh 4vh;

  grid-template-areas:
    'h h'
    'm m'
    'f f';
`;

export const HeaderContent = styled.div`
  grid-area: h;
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  padding-top: 2%;
  height: 100%;

  label {
    color: var(--sub-title);
  }
`;

export const ImgAndTitleConteiner = styled.div`
  img {
    max-height: 50px;
  }

  h2 {
    color: var(--sub-title);
    margin-top: 7vh;
    font-weight: 700;
    font-size: 20px;
  }
`;

export const LogoutRegion = styled.div`
  display: flex;
  margin-left: 5%;

  a {
    color: var(--sub-title);
    margin-left: 10px;

    :hover {
      font-weight: 700;
    }
  }

  img {
    height: 16px;
  }
`;

export const Content = styled.main`
  background: var(--background);
  grid-area: m;
  display: flex;
  justify-content: center;
`;

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: f;
  color: var(--sub-title);
  font-size: 10px;
  font-weight: 400;
  background-color: var(--secundary-color);

  font-family: 'Roboto', sans-serif;
`;
