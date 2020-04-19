import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTransition } from 'react-spring';
import { createStructuredSelector } from 'reselect';
import { selectIsMenuVisible } from '../../../duck/menu/menuSelectors';
import { ReduxState } from '../../../duck/store';
import { signOutStart } from '../../../duck/users/userActions';
import { selectCurrentUser } from '../../../duck/users/userSelectors';
import { reds } from '../../../utils/colors';
import Icon from '../../Icon/Icon';
import { LinkList, NotLogged, StyledNavigation } from './Menu.styles';
import MenuLink from './menu/MenuLink';
import ProfileInfo from './menu/ProfileInfo';

interface Selectors {
  isMenuVisible: boolean;
  user: any;
}

const menuSelectors = createStructuredSelector<ReduxState, Selectors>({
  user: selectCurrentUser,
  isMenuVisible: selectIsMenuVisible,
});

const Menu: FC = () => {
  const dispatch = useDispatch();
  const { user, isMenuVisible } = useSelector(menuSelectors);

  const itemIconProps = {
    size: 30,
    style: {
      marginRight: '30px',
      position: 'relative',
    },
    color: reds[0],
  };

  const transitions = useTransition(isMenuVisible, null, {
    from: {
      transform: 'translateX(-500px)',
    },
    enter: {
      transform: 'translateX(0)',
    },
    leave: { transform: 'translateX(-500px)' },
  });

  return (
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <StyledNavigation key={key} style={props}>
              <ProfileInfo user={user} />
              {user ? (
                <LinkList>
                  <li>
                    <MenuLink path='/stats' iconName='stats2'>
                      stats
                    </MenuLink>
                  </li>
                  <li>
                    <MenuLink path='/config' iconName='config'>
                      config
                    </MenuLink>
                  </li>
                  {user ? (
                    <li onClick={() => dispatch(signOutStart())}>
                      <Icon name='logout' {...itemIconProps} />
                      logout
                    </li>
                  ) : (
                    <li>
                      <Icon name='profile' {...itemIconProps} />
                      <Link to='/login'>login</Link>
                    </li>
                  )}
                </LinkList>
              ) : (
                <NotLogged>
                  <Link to='/login'>sign in</Link> or{' '}
                  <Link to='/register'>register</Link> for your account to track
                  your stats and setup your timers
                </NotLogged>
              )}
            </StyledNavigation>
          )
      )}
    </>
  );
};

export default Menu;
