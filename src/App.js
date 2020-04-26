import React from 'react';
import styled from 'styled-components';

import SearchButton from './components/SearchButton'
import TweetContainer from './components/TweetContainer'
import TwitterLogo from './twitterlogo.png';
import StockTwitLogo from './stocktwits.png';
import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">
        <ImgContainer>
          <Image src={StockTwitLogo} alt="logo" />
          <Image src={TwitterLogo} alt="logo" />
        </ImgContainer>
      </header>
      <Container>
        <SearchButton/>
        <TweetContainer/>
      </Container>
    </div>
  );
}

const ImgContainer = styled.div`
  display: column;
`

const Image = styled.img`
  width: 100px;
  vertical-align: middle;
`;

const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  justify-content: center;
`;

export default App;
