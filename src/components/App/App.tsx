import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkSession } from '../../duck/users/userActions';
import GlobalStyle from '../../utils/GlobalStyle';
import HamburgerButton from './app/menu/HamburgerButton';
import Menu from './app/Menu';
import Router from './app/Router';
import ProgressBar from '../ProgressBar/ProgressBar';

const App: React.FC = () => {
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
      <Router />
    </>
  );
};

export default App;
