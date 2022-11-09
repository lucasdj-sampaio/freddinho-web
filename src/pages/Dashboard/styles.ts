import styled from 'styled-components';

export const CardItemContent = styled.div`
  padding: 24px 16px;

  img {
    height: 40px;
  }

  h3 {
    margin: 16px 0;
    font-weight: 500;
    color: var(--secundary-color);
  }

  p {
    color: var(--title-color);
    font-weight: 500;
    font-size: 13px;
    margin: 16px 0;
  }
`;

export default CardItemContent;
