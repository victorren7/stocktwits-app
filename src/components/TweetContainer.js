import React from 'react';
import styled from 'styled-components';
import TweetCard from '../components/TweetCard'

const TweetContainer = ({ totalSymbols }) => {
  console.log("totalSymbols2", totalSymbols);
  const allSymbols = Object.entries(totalSymbols);
  console.log("allSymbols", allSymbols.length);

  return (
    <Box>
      {Object.entries(totalSymbols).map(([id, value]) => (
        <div key={id}> 
        {console.log(allSymbols, 'value')}
          <Paragraph>total tweets found: {value.messages.length * allSymbols.length}</Paragraph>
          <TweetCard data={value}/>
        </div>
      ))}

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