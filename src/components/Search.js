import React from 'react';
import styled from 'styled-components';
import {Row} from '../global.css';
import BeatLoader from 'react-spinners/BeatLoader'

const Search = ({handleSearch, setSearchInput, clearSymbols, isLoading}) => {

  const handleChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  return (
    <Row>
      <Input name='input' placeholder=' example: AAPL' onChange={handleChange}/>
      <Button type='button' onClick={handleSearch} setSearchInput={setSearchInput} clearSymbols={clearSymbols}>Search</Button>
      {
        isLoading ? 
        <LoadingWrapper>
          <BeatLoader/>
        </LoadingWrapper> 
        : null
      }
    </Row>

  )
};

const Button = styled.button`
  width: 220px;
  height: 35px;
  border-radius: 4px;
  background-color: #63D1F4;
  font-weight: bolder;
  justify-self: center;
`;

const Input = styled.input`
  width: 220px;
  height: 35px;
  border-radius: 4px;
  border-style: groove;
  justify-self: center;
`;

const LoadingWrapper = styled.div`
  text-align: center
`

export default Search;