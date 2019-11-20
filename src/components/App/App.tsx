import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkSession } from '../../duck/users/userActions';
import GlobalStyle from '../../utils/GlobalStyle';
import HamburgerButton from './app/menu/HamburgerButton';
import Menu from './app/Menu';
import Router from './app/Router';
import ProgressBar from '../ProgressBar/ProgressBar';
import { ReduxState } from '../../duck/store';
import Loading from '../Loading/Loading';

const App: React.FC = () => {
  const isGettingUser = useSelector(
    ({ user }: ReduxState) => user.isGettingUser
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkSession());
  }, [checkSession]);

  return (
    <>
      <ProgressBar />
      <HamburgerButton />
      <Menu />
      <GlobalStyle />
      {isGettingUser ? <Loading /> : <Router />}
    </>
  );
};

export default App;
