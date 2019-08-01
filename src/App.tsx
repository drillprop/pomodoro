import * as React from 'react';
import GlobalStyle from './utils/GlobalStyle';
import Interface from './components/Timer/Interface';
import HamburgerButton from './components/HamburgerButton';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <HamburgerButton />
      <Interface />
    </>
  );
};

export default App;
