import * as React from 'react';
import GlobalStyle from './utils/GlobalStyle';
import HamburgerButton from './components/Menu/HamburgerButton';
import { useSelector } from 'react-redux';
import Router from './components/Router';
import Menu from './components/Menu/Menu';

const App: React.FC = () => {
  const isMenuVisible = useSelector((state: any) => state.isMenuVisible);
  return (
    <>
      <GlobalStyle />
      <HamburgerButton />
      <Menu />
      <Router />
    </>
  );
};

export default App;
