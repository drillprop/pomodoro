import React, { useEffect } from 'react';
import GlobalStyle from '../utils/GlobalStyle';
import Router from './Router';
import HamburgerButton from './Menu/HamburgerButton';
import Menu from './Menu/Menu';
import { useDispatch } from 'react-redux';
import { checkSession } from '../duck/users/userActions';

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
