import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { primary, background, secondaryBackground } from '../../utils/colors';
import Profile from './Profile';
import { secondFont, primFont } from '../../utils/fonts';

const StyledNavigation = styled.nav`
  position: fixed;
  z-index: 5;
  top: 0;
  height: 100%;
  width: 400px;
  background-color: ${primary};
`;

const LinkList = styled.ul`
  margin-top: 50px;
  padding: 0;
  margin-left: 50px;
  li,
  a {
    color: ${secondaryBackground};
  }
  li {
    margin-bottom: 10px;
    opacity: 0.6;
    font-family: ${secondFont};
    font-size: 16px;
    font-weight: 400;
    :hover {
      opacity: 1;
    }
  }
`;

const Menu = (props: any) => {
  const { pathname } = props.location;
  return (
    <>
      <StyledNavigation>
        <Profile />
        <LinkList>
          <li>profile</li>
          <li>
            {pathname === '/config' ? (
              <Link to='/'>back to app</Link>
            ) : (
              <Link to='/config'>config</Link>
            )}
          </li>
          <li>stats</li>
          <li>logout</li>
        </LinkList>
      </StyledNavigation>
    </>
  );
};

export default Menu;
