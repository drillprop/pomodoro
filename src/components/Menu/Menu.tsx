import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { primary, background, secondaryBackground } from '../../utils/colors';
import Profile from './Profile';
import { secondFont } from '../../utils/fonts';
import Icon from '../../elements/Icon';
import useRouter from '../../hooks/useRouter';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxState } from '../../duck/store';
import { useTransition, animated, config } from 'react-spring';
import { signOutStart } from '../../duck/users/userActions';

const StyledNavigation = styled(animated.nav)`
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
    margin-bottom: 20px;
    opacity: 0.6;
    cursor: pointer;
    font-family: ${secondFont};
    font-size: 16px;
    font-weight: 400;
    :hover {
      opacity: 1;
    }
    ::after {
      content: '';
      left: 0;
      margin-top: 42px;
      margin-left: 30px;
      width: calc(100% - 60px);
      height: 1px;
      position: absolute;
      opacity: 0.3;
      background-color: ${secondaryBackground};
    }
  }
`;

const Menu: FC = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const itemIconProps = {
    size: 30,
    style: {
      marginRight: '10px',
      position: 'relative',
      top: '0.25em'
    },
    color: background
  };

  const user = useSelector(({ user }: ReduxState) => user.user);
  const toggle = useSelector(({ timer }: ReduxState) => timer.isMenuVisible);

  const transitions = useTransition(toggle, null, {
    from: {
      transform: 'translateX(-500px)'
    },
    enter: {
      transform: 'translateX(0)'
    },
    leave: { transform: 'translateX(-500px)' }
  });

  return (
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <StyledNavigation key={key} style={props}>
              <Profile user={user} />
              <LinkList>
                <li>
                  <Icon name='profile' {...itemIconProps} />
                  profile
                </li>
                <li>
                  <Link to='/stats'>
                    <Icon name='stats2' {...itemIconProps} />
                    stats
                  </Link>
                </li>
                <li>
                  {router.location.pathname === '/config' ? (
                    <>
                      <Icon name='home' {...itemIconProps} />
                      <Link to='/'>back to app</Link>
                    </>
                  ) : (
                    <>
                      <Icon name='config' {...itemIconProps} />
                      <Link to='/config'>config</Link>
                    </>
                  )}
                </li>
                {user ? (
                  <li onClick={() => dispatch(signOutStart())}>
                    <Icon name='logout' {...itemIconProps} />
                    logout
                  </li>
                ) : (
                  <li>
                    <Icon name='profile' {...itemIconProps} />
                    <Link to='/sign'>login</Link>
                  </li>
                )}
              </LinkList>
            </StyledNavigation>
          )
      )}
    </>
  );
};

export default Menu;
