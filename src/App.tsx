import * as React from 'react';
import GlobalStyle from './utils/GlobalStyle';
import HamburgerButton from './components/Menu/HamburgerButton';
import { useSelector } from 'react-redux';
import Menu from './components/Menu/Menu';
import Router from './Router';

const App: React.FC = () => {
  const isMenuVisible = useSelector((state: any) => state.isMenuVisible);
  return (
    <>
      <GlobalStyle />
      <HamburgerButton />
      {isMenuVisible && <Menu />}
      <Router />
    </>
  );
};

export default App;
