import * as React from 'react';
import GlobalStyle from '../utils/GlobalStyle';
import Router from './Router';
import HamburgerButton from './Menu/HamburgerButton';
import { useSelector } from 'react-redux';
import Menu from './Menu/Menu';

const App: React.FC = () => {
  const isMenuVisible = useSelector(
    (state: any) => state.timerReducer.isMenuVisible
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
