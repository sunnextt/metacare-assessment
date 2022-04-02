import React from 'react';
import CtopMenu, { Li, TMButton, Ul } from './styled';

const TopMenu = () => {
  return (
    <CtopMenu>
      <Ul>
        <Li>
          <TMButton>Efficiency</TMButton>
        </Li>
        <Li>
          <TMButton>Volume</TMButton>
        </Li>
        <Li>
          <TMButton>Customer Satisfaction</TMButton>
        </Li>
        <Li>
          <TMButton>Backlog</TMButton>
        </Li>
      </Ul>
    </CtopMenu>
  );
};

export default TopMenu;
