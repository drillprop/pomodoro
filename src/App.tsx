import * as React from 'react';
import GlobalStyle from './utils/GlobalStyle';
import HamburgerButton from './components/Menu/HamburgerButton';
import { useSelector } from 'react-redux';
import Router from './Router';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <HamburgerButton />
      <Router />
    </>
  );
};

export default App;
