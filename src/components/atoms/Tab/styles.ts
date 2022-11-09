import styled from 'styled-components';

export const Container = styled.div``;

interface HeaderItemProps {
  active: boolean;
}
export const HeaderItem = styled.div<HeaderItemProps>`
  background: ${props => (props.active ? 'green' : 'white')};
`;
