import React from 'react';
import GlobalStyle from '../utils/GlobalStyle';
import Router from './Router';
import HamburgerButton from './Menu/HamburgerButton';
import Menu from './Menu/Menu';

const App: React.FC = () => {
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
