import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkSession } from '../../duck/users/userActions';
import GlobalStyle from '../../utils/GlobalStyle';
import HamburgerButton from './app/menu/HamburgerButton';
import Menu from './app/Menu';
import Router from './app/Router';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkSession());
  }, [checkSession]);

  return (
    <>
      <HamburgerButton />
      <Menu />
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
