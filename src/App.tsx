import * as React from 'react';
import GlobalStyle from './utils/GlobalStyle';
import Interface from './components/Timer/Interface';
import HamburgerButton from './components/HamburgerButton';
import { useSelector } from 'react-redux';

const App: React.FC = () => {
  const isConfigVisible = useSelector((state: any) => state.isConfigVisible);
  return (
    <>
      <GlobalStyle />
      <HamburgerButton />
      {isConfigVisible ? 'visible' : <Interface />}
    </>
  );
};

export default App;
