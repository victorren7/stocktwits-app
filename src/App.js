import React, {useState} from 'react';
import styled from 'styled-components';

import {omit} from 'lodash'
import Search from './components/Search'
import TweetContainer from './components/TweetContainer'
import TwitterLogo from './twitterlogo.png';
import StockTwitLogo from './stocktwits.png';
import './App.css';
import { buildBatchSearch, getTotalSymbols } from './helpers';

function App() {
  const [ searchInput, setSearchInput ] = useState('');
  const [ totalSymbols, setTotalSymbols ] = useState({});
  const [ isLoading, setIsLoading ] = useState(false);
  const [ selectedSymbol, setSelectedSymbol ] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    setIsLoading(true)
    const request = buildBatchSearch(searchInput);
    Promise.all(request).then((data) => {
      const updatedSymbols = getTotalSymbols(data);
      const merged = {...totalSymbols, ...updatedSymbols}
      setTotalSymbols(merged);
      setIsLoading(false);
      setSearchInput('');
    })
  }

  const clearSymbols = (id) => {
    const updatedSymbols = omit(totalSymbols, id);
    setTotalSymbols(updatedSymbols);
  };

  return (
    <div>
      <header className="App-header">
        <ImgContainer>
          <Image src={StockTwitLogo} alt="logo" />
          <Image src={TwitterLogo} alt="logo" />
        </ImgContainer>
      </header>
      <Container>
        <Search
          handleSearch={handleSearch}
          setSearchInput={setSearchInput}
          clearSymbols={clearSymbols}
          isLoading={isLoading}
          />
        <TweetContainer
          totalSymbols={totalSymbols}
          selectedSymbol={selectedSymbol}
          setSelectedSymbol={setSelectedSymbol}
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
  // background-color: #7395AE;
  min-height: 90vh;
  align-content: baseline;
`;

export default App;
