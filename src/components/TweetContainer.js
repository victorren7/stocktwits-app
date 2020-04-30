import React, {useRef} from 'react';

import styled from 'styled-components';
import TweetCard from '../components/TweetCard';
import { Row } from '../global.css';
import { screenView } from '../ScreenView';

import { 
  ExpansionPanel, 
  ExpansionPanelSummary, 
  ExpansionPanelDetails, 
  Typography
} from '@material-ui/core';


const TweetContainer = ({ 
  totalSymbols, 
  selectedSymbol, 
  setSelectedSymbol,
  clearSymbols
}) => {

  const handleToggle = (panel) => (event, selectedSymbol) => {
    setSelectedSymbol(selectedSymbol ? panel : '');
  };

  const refSymbol = useRef(<div/>);

  return (
    <Box>
      <Row  gridGap={15}> 
        {Object.entries(totalSymbols).map(([id, value]) => (
          <div key={id}>
          <Paragraph>
            Total Tweets for {value.symbol.symbol}: {value.messages.length}
          </Paragraph>
          <Expansion
            expanded={selectedSymbol === id} 
            onChange={handleToggle(id)} 
            ref={refSymbol}
          >
            <ExpansionPanelSummary 
              id={id}
              expandIcon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M12.44 6.44L9 9.88 5.56 6.44 4.5 7.5 9 12l4.5-4.5z"/></svg>}
            >
              <Button type='button' onClick={() => clearSymbols(id)} > 
                <Text variant='h5' as='h5'>
                  X
                </Text>
              </Button>
              <Text variant='h5' as='h5' margin>
                {value.symbol.symbol}
              </Text>
            </ExpansionPanelSummary>
            <hr/>
            <ExpansionPanelDetails>
              <TweetCard data={value} />
            </ExpansionPanelDetails>
          </Expansion>
          </div>
        ))}
        </Row>
    </Box>
  );
};

const Box = styled(Row)`
  width: 90vw;
  justify-content: center;
`;

const Expansion = styled(ExpansionPanel)`
  width: 100vw;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
  @media ${screenView.desktop} { 
    width: 70vw;
    border-radius: 20px;
  }
`;

const Paragraph = styled.p`
  text-align: center;
  color: gainsboro;
`;

const Button = styled.button`
  border: 0;
  color: #DC143C;
  background-color: transparent;
`;

const Text = styled(Typography)`
  margin: ${props => props.margin ? 'auto' : 0};
  font-weight: 300;
`;

export default TweetContainer;