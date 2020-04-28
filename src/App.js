import React, {useState} from 'react';
import styled from 'styled-components';

import Search from './components/Search'
import TweetContainer from './components/TweetContainer'
import TwitterLogo from './twitterlogo.png';
import StockTwitLogo from './stocktwits.png';
import './App.css';

import { buildBatchSearch, getTotalSymbols } from './helpers';
import {omit} from 'lodash'

function App() {
  const [ searchInput, setSearchInput ] = useState(' ')
  const [ totalSymbols, setTotalSymbols ] = useState({})

  const handleSearch = (event) => {
    console.log('searchInput1', searchInput)
    event.preventDefault();
    const request = buildBatchSearch(searchInput);
  
    Promise.all(request).then((data) => {
      const updatedSymbols = getTotalSymbols(data);
      setTotalSymbols({...totalSymbols, ...updatedSymbols})
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
        />
        <TweetContainer
          totalSymbols={totalSymbols}
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
`;

export default App;
