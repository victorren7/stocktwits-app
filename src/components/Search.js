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
      {
        isLoading ? 
        <LoadingWrapper>
          <BeatLoader/>
        </LoadingWrapper> 
        : null
      }
    </Row>
    </Div>
  )
};

const Div = styled.div`
  height: 130px;
  border-bottom: 1px solid rgb(204, 214, 221);
  padding: 10px 0 15px 0;
  background-color: #7395AE;
`;

const Button = styled.button`
  width: 220px;
  height: 35px;
  border-radius: 4px;
  background-color: cornflowerblue;
  font-weight: bolder;
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

const LoadingWrapper = styled.div`
  text-align: center
`

export default Search;