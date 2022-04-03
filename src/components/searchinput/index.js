import React from 'react';
import iconSearch from '../../assets/svg/icon-search.svg';
import { EnterButton, EnterButtonSmall, Form, Input, InputSmall } from './style';

export const SearchInputSmall = ({ handlechange, handleClick }) => {
  return (
    <div>
      <Form>
        <EnterButtonSmall onClick={handleClick}>
          <img src={iconSearch} alt="Search" />
        </EnterButtonSmall>
        <InputSmall placeholder="Search" name="search" onChange={handlechange} />
      </Form>
    </div>
  );
};

const SearchInput = ({ handlechange, handleClick }) => {
  return (
    <div>
      <Form>
        <Input placeholder="Ask us any question" name="search" onChange={handlechange} />
        <EnterButton onClick={handleClick}>
          <img src={iconSearch} alt="Search" />
        </EnterButton>
      </Form>
    </div>
  );
};

export default SearchInput;
