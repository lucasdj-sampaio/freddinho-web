import styled from 'styled-components';

export const Content = styled.div`
  h1 {
    margin-bottom: 50px;
    width: 100%;
    text-align: center;
    color: var(--secundary-color);
    font-weight: bold;
    font-size: 20px;
  }
`;

export const UserGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserContent = styled.div`
  cursor: pointer;
  display: grid;

  img {
    width: 140px;
  }

  label {
    margin-top: 10px;
    width: 100%;
    text-align: center;
    color: var(--secundary-color);
    font-weight: bold;
    font-size: 17px;
  }
`;
