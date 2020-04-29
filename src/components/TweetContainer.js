import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import styled from 'styled-components';
import TweetCard from '../components/TweetCard';
import ToggleContent from '../components/ToggleContent';
import {getTotalTweets} from '../helpers';
import { Row } from '../global.css'
import Collapse from '@material-ui/core/Collapse';

const TweetContainer = ({ 
  totalSymbols, 
  selectedSymbol, 
  setSelectedSymbol,
  handleToggle
}) => {

  const totalTweets = getTotalTweets(totalSymbols);

  return (
    <Box>
      <Paragraph>total tweets found: {totalTweets}</Paragraph>
      <Row  gridGap={15}> 
        {Object.entries(totalSymbols).map(([id, value]) => (
          <ToggleContent 
            key={id}
            header={value.symbol.symbol} 
            renderTweets={() => <TweetCard data={value}/>}
            id={id}
            value={value}
            selectedSymbol={selectedSymbol}
            setSelectedSymbol={setSelectedSymbol}
            // onClick={() => handleToggle()}
            
            handleToggle={handleToggle}
          />
        ))}
        </Row>
    </Box>
  );
};

const Box = styled.div`
  border-top: 2px solid;
`;

const Paragraph = styled.p`
  text-align: center;
  color: #77BFC7;
`

export default TweetContainer;