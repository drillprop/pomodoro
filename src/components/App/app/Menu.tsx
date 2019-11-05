import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTransition } from 'react-spring';
import { ReduxState } from '../../../duck/store';
import { signOutStart } from '../../../duck/users/userActions';
import Icon from '../../Icon/Icon';
import useRouter from '../../../hooks/useRouter';
import { background } from '../../../utils/colors';
import { LinkList, StyledNavigation } from './Menu.styles';
import Profile from './menu/Profile';

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
