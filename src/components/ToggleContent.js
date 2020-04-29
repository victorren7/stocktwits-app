import React from 'react';
import styled from 'styled-components';
import { Column } from '../global.css'
import { screenView } from '../ScreenView';

const ToggleContent = ({
  header, 
  renderTweets, 
  selectedSymbol, 
  setSelectedSymbol, 
  id,
  value,
  handleToggle
}) => {
  console.log('id', id)
  console.log('value', value.symbol.id)
  const toggle = (id) => {
    if (value.symbol.id === id) {
      setSelectedSymbol(id)
    }
  }

  console.log('selectedSymbol', selectedSymbol)
  return (
    <Div>
      <StyledColumn onClick={() => toggle()}>
        <H2  selected={selectedSymbol ? true : false}>
          {header}
        </H2>
        <H2 selected={selectedSymbol ? true : false}>
          {selectedSymbol ? '-' : '+' }
        </H2>
      </StyledColumn>
      {selectedSymbol ? <div>{renderTweets()}</div> : null}
    </Div>
  )
}

const Div = styled.div`
  width: 100vw;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
  background-color: #C2CAD0;
  @media ${screenView.desktop} { 
    width: 70vw;
    border-radius: 20px;
  }
`;

const StyledColumn = styled(Column)`
  justify-content: space-between;
  padding: 0 10px;
`;

const H2 = styled.h2`
  font-weight: ${props => props.selected ? 600 : 300};
`;

export default ToggleContent;