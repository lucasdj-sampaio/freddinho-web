import styled from 'styled-components';

export type Dimension = { w: number; h: number };

interface Props {
  dimensionInPorcent: Dimension;
}

export const GradientDiv = styled.div<Props>`
  width: ${props => props.dimensionInPorcent?.w + 'vw'};
  height: ${props => props.dimensionInPorcent?.h + 'vh'};
  border-radius: 50% 0 0 50%;

  background: linear-gradient(
    180deg,
    var(--secundary-color) 0%,
    rgba(208, 210, 239, 0.4) 100%
  );
`;
