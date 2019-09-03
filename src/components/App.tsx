import React, { useEffect } from 'react';
import GlobalStyle from '../utils/GlobalStyle';
import Router from './Router';
import HamburgerButton from './Menu/HamburgerButton';
import { useSelector, useDispatch } from 'react-redux';
import Menu from './Menu/Menu';
import { auth } from '../utils/firebase/firebase';
import { getUser } from '../duck/users/userActions';
import { ReduxState } from '../duck/store';
import { addUserToFirestore } from '../utils/firebase/firestore';
import { getInitialState } from '../duck/timer/timerActions';

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

    let unsubscribeFromAuth: any = auth.onAuthStateChanged(async usr => {
      if (usr) {
        const userRef = await addUserToFirestore(usr, null);
        localStorage.setItem('usr', JSON.stringify(usr));
        dispatch(getInitialState(usr));
        if (userRef) {
          userRef.onSnapshot((snapshot: any) => {
            dispatch(
              getUser({
                id: snapshot.id,
                ...snapshot.data()
              })
            );
          });
        }
      } else {
        localStorage.removeItem('usr');
        dispatch(getUser(usr));
      }
      return () => {
        unsubscribeFromAuth();
      };
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
