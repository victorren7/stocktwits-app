import React from 'react';
import styled from 'styled-components';
import {screenView} from '../ScreenView';

const TweetContainer = () => {
  return (
    <Box>
      <div>vudfbvliusfnvildsfhviufv</div>
    </Box>
  );
};

const Box = styled.div`
  min-height: 75vh;
  min-width: 90vw;
  border: 2px solid #C8C8C8;
  border-radius: 4px;
  text-align: center;
  @media ${screenView.desktop} {
    min-width: 75vw;

  }
`;

export default TweetContainer;