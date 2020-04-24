import React from 'react';
import styled from 'styled-components';

const SearchButton = () => {
  return (
    <Button type='button'>Search</Button>
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

export default SearchButton;