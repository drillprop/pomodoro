import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HamburgerButton from './HamburgerButton';

const StyledNavigation = styled.nav`
  position: absolute;
  top: 0;
  height: 100vh;
`;

const Menu = (props: any) => {
  const { pathname } = props.location;
  return (
    <>
      <StyledNavigation>
        <ul>
          <li>
            {pathname === '/config' ? (
              <Link to='/'>back to app</Link>
            ) : (
              <Link to='/config'>config</Link>
            )}
          </li>
        </ul>
      </StyledNavigation>
    </>
  );
};

export default Menu;
