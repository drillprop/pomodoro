import * as React from 'react';
import GlobalStyle from './utils/GlobalStyle';
import Interface from './components/Timer/Interface';
import HamburgerButton from './components/HamburgerButton';
import { useSelector } from 'react-redux';
import Config from './components/Config/Config';

const App: React.FC = () => {
  const isConfigVisible = useSelector((state: any) => state.isConfigVisible);
  return (
    <>
      <GlobalStyle />
      <HamburgerButton />
      {isConfigVisible ? <Config /> : <Interface />}
    </>
  );
};

export default App;
