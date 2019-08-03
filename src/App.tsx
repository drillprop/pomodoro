import * as React from 'react';
import GlobalStyle from './utils/GlobalStyle';
import Interface from './components/Timer/Interface';
import HamburgerButton from './components/HamburgerButton';
import { useSelector } from 'react-redux';
import Config from './components/Config/Config';
import Router from './components/Router';

const App: React.FC = () => {
  const isConfigVisible = useSelector((state: any) => state.isConfigVisible);
  return (
    <>
      <GlobalStyle />
      <HamburgerButton />
      <Router />
    </>
  );
};

export default App;
