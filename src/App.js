import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Search from './components/Search'
import TweetContainer from './components/TweetContainer'
import TwitterLogo from './twitterlogo.png';
import StockTwitLogo from './stocktwits.png';
import './App.css';

import { buildBatchSearch, getTotalSymbols } from './helpers';
import {omit, flattenDeep} from 'lodash'

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


  const handleToggle = (id) => {
    console.log('totalSymbols', totalSymbols)
    console.log('clicked')
    if (totalSymbols === id) {
      setSelectedSymbol(id)
    }
  }

  const clearSymbols = (id) => {
    const updatedSymbols = omit(totalSymbols, id);
    setTotalSymbols(updatedSymbols);
    // if (selectedSymbol === id) {
    //   setSelectedSymbol('');
    // }
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
          handleToggle={handleToggle}
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
