import React from 'react';
import styled from 'styled-components';

const StyledNavigation = styled.nav`
  position: absolute;
  top: 0;
  height: 100vh;
`;

const Menu = () => {
  return (
    <StyledNavigation>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    </StyledNavigation>
  );
};

export default Menu;
