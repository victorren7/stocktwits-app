import styled from 'styled-components';

const Column = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${props => props.gridGap ? props.gridGap : 10}px;
`;

const Row = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: ${props => props.gridGap ? props.gridGap : 10}px;
`;

export {
  Column,
  Row,
}