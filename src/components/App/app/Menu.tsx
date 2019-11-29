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
import ProfileInfo from './menu/ProfileInfo';
import { selectCurrentUser } from '../../../duck/users/userSelectors';
import { selectIsMenuVisible } from '../../../duck/timer/timerSelectors';
import { createStructuredSelector } from 'reselect';

interface Selectors {
  isMenuVisible: boolean;
  user: any;
}

const menuSelectors = createStructuredSelector<ReduxState, Selectors>({
  user: selectCurrentUser,
  isMenuVisible: selectIsMenuVisible
});

const Menu: FC = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const { user, isMenuVisible } = useSelector(menuSelectors);

  const itemIconProps = {
    size: 30,
    style: {
      marginRight: '10px',
      position: 'relative',
      top: '0.25em'
    },
    color: background
  };

  const transitions = useTransition(isMenuVisible, null, {
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
              <ProfileInfo user={user} />
              <LinkList>
                <li>
                  <Link to='/account'>
                    <Icon name='profile' {...itemIconProps} />
                    account
                  </Link>
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
