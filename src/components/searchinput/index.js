import React from 'react';
import styled from 'styled-components';
import iconSearch from '../../assets/svg/icon-search.svg';

const Input = styled.input`
  /* display: block; */
  width: 28rem;
  height: 54px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background: #fafafc;
  border-radius: 10px;
  background-color: #fafafc;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  @media only screen and (min-width: 1300px) {
    width: 31.5rem;
  }

  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  &::placeholder {
    opacity: 1;
    font-family: 'Gelion';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 29px;
    display: flex;
    align-items: center;
    color: #a3a3c2;
  }
`;
const Form = styled.form`
  position: relative;
`;
const EnterButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  background: transparent;
  border: none;
  padding: 0 1.5rem;
`;

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
