import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavigation = styled.nav`
  position: absolute;
  top: 0;
  height: 100vh;
`;

const Menu = () => {
  return (
    <StyledNavigation>
      <ul>
        <li>
          <Link to='/config'>one</Link>
        </li>
        <li>
          <Link to='/'>second</Link>
        </li>
      </ul>
    </StyledNavigation>
  );
};

export default Menu;
