import React from 'react';

import styled from 'styled-components';
import TweetCard from '../components/TweetCard';
import {getTotalTweets} from '../helpers';
import { Row } from '../global.css';
import { screenView } from '../ScreenView';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const TweetContainer = ({ 
  totalSymbols, 
  selectedSymbol, 
  setSelectedSymbol,
}) => {

  const handleToggle = (panel) => (event, selectedSymbol) => {
    setSelectedSymbol(selectedSymbol ? panel : '');
  }

  const totalTweets = getTotalTweets(totalSymbols);

  return (
    <Box>
      <Paragraph>Total Tweets Found: {totalTweets}</Paragraph>
      <Row  gridGap={15}> 
        {Object.entries(totalSymbols).map(([id, value]) => (
          <Expansion
            expanded={selectedSymbol === id} 
            onChange={handleToggle(id)} 
            key={id} 
            ref={handleToggle}>
            <ExpansionPanelSummary 
              id={id}
              expandIcon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M12.44 6.44L9 9.88 5.56 6.44 4.5 7.5 9 12l4.5-4.5z"/></svg>}>
              <Typography variant='h5' as='h5'>
                {value.symbol.symbol}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails ref={handleToggle}>
              <TweetCard data={value} />
            </ExpansionPanelDetails>
          </Expansion>
        ))}
        </Row>
    </Box>
  );
};

const Box = styled(Row)`
  width: 100vw;
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

export default TweetContainer;