import React from 'react';
import styled from 'styled-components';
import {Row} from '../global.css';

const Search = ({handleSearch, setSearchInput, clearSymbols}) => {

  const handleChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  return (
    <Row>
      <Input name='placeholder' onChange={handleChange}/>
      <Button type='button' onClick={handleSearch} setSearchInput={setSearchInput} clearSymbols={clearSymbols}>Search</Button>
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

export default Search;