import React from 'react';
import styled from 'styled-components';
import {Row} from '../global.css';

const Search = ({handleSearch, setSearchInput, clearSymbols, isLoading}) => {

  const handleChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  return (
    <Div>
    <Row>
      <Input 
        name='input' 
        placeholder=' Example: AAPL' 
        onChange={handleChange}
      />
      <Button 
        variant="outlined" 
        size='medium'
        onClick={handleSearch} 
        setSearchInput={setSearchInput} 
        clearSymbols={clearSymbols}
      >
        Search
      </Button>
    </Row>
    </Div>
  )
};

const Div = styled.div`
  height: 130px;
  border-bottom: 1px solid rgb(204, 214, 221);
  padding: 10px 0 15px 0;
`;

const Button = styled.button`
  width: 220px;
  height: 35px;
  border-radius: 4px;
  background-color: cornflowerblue;
  font-weight: 300;
  justify-self: center;
  border-color: mediumblue;
  color: white;
`;

const Input = styled.input`
  width: 220px;
  height: 35px;
  border-radius: 4px;
  border-style: groove;
  justify-self: center;
`;

export default Search;