import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import {omit} from 'lodash'
import Search from './components/Search'
import TweetContainer from './components/TweetContainer'
import TwitterLogo from './assets/twitterlogo.png';
import StockTwitLogo from './assets/stocktwits.png';
import './App.css';
import { buildBatchSearch, getTotalSymbols } from './helpers';

function App() {
  const [ searchInput, setSearchInput ] = useState('');
  const [ totalSymbols, setTotalSymbols ] = useState({});
  const [ selectedSymbol, setSelectedSymbol ] = useState('');

  const handleSearch = (event) => {
    event.persist();
    const request = (buildBatchSearch(searchInput));
    Promise.all(request).then((data) => {
      const updatedSymbols = getTotalSymbols(data);
      const merged = {...totalSymbols, ...updatedSymbols};
      setTotalSymbols(merged);
      setSearchInput('');
    })
    searchRefresh(event)
    clearInterval(searchRefresh, 20000)
  }
  const searchRefresh = (event) => {
    setInterval(function() {
        handleSearch(event)
      }, 30000)
  }

  const clearSymbols = (id) => {
    const updatedSymbols = omit(totalSymbols, id);
    setTotalSymbols(updatedSymbols);
    setSelectedSymbol('')
  };

  return (
    <div>
      <header className="App-header">
        <ImgContainer>
          <Image src={TwitterLogo} alt="logo" />
          <Image src={StockTwitLogo} alt="logo" />
        </ImgContainer>
      </header>
      <Container>
        <Search
          handleSearch={handleSearch}
          setSearchInput={setSearchInput}
          clearSymbols={clearSymbols}
          />
        <TweetContainer
          totalSymbols={totalSymbols}
          selectedSymbol={selectedSymbol}
          setSelectedSymbol={setSelectedSymbol}
          clearSymbols={clearSymbols}
        />
      </Container>
    </div>
  );
}

const ImgContainer = styled.div`
  display: column;
`;

const Image = styled.img`
  width: 100px;
  vertical-align: middle;
`;

const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  justify-content: center;
  min-height: 90vh;
  align-content: baseline;
`;

export default App;
