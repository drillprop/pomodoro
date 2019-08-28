import React, { useEffect } from 'react';
import GlobalStyle from '../utils/GlobalStyle';
import Router from './Router';
import HamburgerButton from './Menu/HamburgerButton';
import { useSelector, useDispatch } from 'react-redux';
import Menu from './Menu/Menu';
import { auth } from '../utils/firebase/firebase';
import { getUser } from '../duck/users/userActions';
import { ReduxState } from '../duck/store';
import { fetchTasks } from '../duck/tasks/tasksActions';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const isMenuVisible = useSelector(
    (state: ReduxState) => state.timer.isMenuVisible
  );

  useEffect(() => {
    const localStUser = localStorage.getItem('usr');
    if (localStUser) {
      const { uid, email, displayName } = JSON.parse(localStUser);
      dispatch(getUser({ uid, email, displayName }));
    }
    auth.onAuthStateChanged(usr => {
      if (usr) {
        const { uid, email, displayName } = usr;

        localStorage.setItem('usr', JSON.stringify(usr));

        dispatch(fetchTasks());
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
