import React, { useState } from 'react';
import styled from 'styled-components';
import { buildBatchRequest } from '../helpers';

const handleSearch = (event) => {
  event.preventDefault();
  const request = buildBatchRequest();
  Promise.all(request).then((data) => {
    console.log(data, 'data');
  })
}

const SearchButton = () => {
  return (
    <div>
      <Button type='button' onClick={handleSearch}>Search</Button>
      <Input name='placeholder'/>
    </div>

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

export default SearchButton;