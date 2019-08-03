import * as React from 'react';
import GlobalStyle from './utils/GlobalStyle';
import HamburgerButton from './components/HamburgerButton';
import { useSelector } from 'react-redux';
import Router from './components/Router';

const App: React.FC = () => {
  const isMenuVisible = useSelector((state: any) => state.isMenuVisible);
  return (
    <>
      <GlobalStyle />
      <HamburgerButton />
      <Router />
    </>
  );
};

export default App;
