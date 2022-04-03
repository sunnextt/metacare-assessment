import SearchInput from '../../components/searchinput';
import React from 'react';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import Nofication from '../../components/notification';
import { useMediaQuery } from 'usehooks-ts';

import TopMenu from '../../components/topMenu';

const MainHeader = ({ collapsed, toggle, breakpoint }) => {
  const matches = useMediaQuery('(max-width: 600px)');

  const style = {
    zIndex: 1,
    background: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '78px',
    padding: matches ? '0 1rem 0 3rem' : '3.5rem',
  };

  console.log(collapsed, breakpoint);
  return (
    <>
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
      <TopMenu />
    </>
  );
};

export default MainHeader;
