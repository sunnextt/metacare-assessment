import SearchInput from '../../components/searchinput';
import React from 'react';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import Nofication from '../../components/notification';

const style = {
  zIndex: 1,
  background: '#fff',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '78px',
  padding: '3.5rem',
};

const MainHeader = ({ collapsed, toggle, breakpoint }) => {
  console.log(collapsed, breakpoint);
  return (
    <div className="header" style={style}>
      {breakpoint ? (
        <>
          {React.createElement(collapsed ? AiOutlineMenuFold : AiOutlineMenuUnfold, {
            className: 'trigger',
            onClick: toggle,
          })}
        </>
      ) : null}
      <SearchInput />
      <Nofication />
    </div>
  );
};

export default MainHeader;
