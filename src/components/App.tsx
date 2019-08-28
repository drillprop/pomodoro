import React, { useEffect } from 'react';
import GlobalStyle from '../utils/GlobalStyle';
import Router from './Router';
import HamburgerButton from './Menu/HamburgerButton';
import { useSelector, useDispatch } from 'react-redux';
import Menu from './Menu/Menu';
import { auth } from '../utils/firebase/firebase';
import { getUser } from '../duck/users/userActions';
import { ReduxState } from '../duck/store';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const isMenuVisible = useSelector(
    (state: ReduxState) => state.timer.isMenuVisible
  );

  useEffect(() => {
    auth.onAuthStateChanged(usr => {
      if (usr) {
        localStorage.setItem('usr', JSON.stringify(usr));

        const { uid, email, displayName } = usr;
        dispatch(getUser({ uid, email, displayName }));
      } else {
        localStorage.removeItem('usr');
        dispatch(getUser(null));
      }
    });
  }, []);

  return (
    <>
      <HamburgerButton />
      {isMenuVisible && <Menu />}
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
