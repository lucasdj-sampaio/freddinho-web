import { Background } from './../../../pages/_layouts/public/styles';
import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70vw;
  max-height: 67vh;
  border-radius: 8px;
  box-shadow: 8px 8px 32px 0px #b3b3b399;
  position: absolute;
  border: solid;
  border-width: 1px;
  border-color: var(--card-border);
  background-color: var(--background);
  transform: translateY(-7vh);
  padding: 34px 16px;
`;

export default StyledCard;
