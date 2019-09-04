import React from 'react';
import GlobalStyle from '../utils/GlobalStyle';
import Router from './Router';
import HamburgerButton from './Menu/HamburgerButton';
import { useSelector } from 'react-redux';
import Menu from './Menu/Menu';
import { ReduxState } from '../duck/store';

const App: React.FC = () => {
  const isMenuVisible = useSelector(
    (state: ReduxState) => state.timer.isMenuVisible
  );

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
