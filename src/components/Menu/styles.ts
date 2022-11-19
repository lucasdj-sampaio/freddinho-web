import styled from 'styled-components';

export type Dimension = { w: number; h: number };

interface Props {
  dimensionInPorcent: Dimension;
}

export const GradientDiv = styled.div<Props>`
  width: ${props => props.dimensionInPorcent?.w + 'vw'};
  height: ${props => props.dimensionInPorcent?.h + 'vh'};
  border-radius: 0% 20px 20px 0%;
  box-shadow: 6px 6px 6px #e2e2e2;
`;

export const MenuContent = styled.div`
  display: grid;
  justify-content: end;
  grid-template-columns: 3% 3% 5% 10%;
  grid-template-rows: 1fr;
  align-items: center;
  color: var(--primary-color);
  font-size: 20px;

  img {
    margin-top: 5px;
    width: 50px;
  }

  h3 {
    font-weight: 700;
  }

  svg {
    :hover {
      cursor: pointer;
    }
  }
`;
