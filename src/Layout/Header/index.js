import React from 'react';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';

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
      <div>form search</div>
      <div>form</div>
    </div>
  );
};

export default MainHeader;
