import * as React from 'react';
import GlobalStyle from './utils/GlobalStyle';
import Interface from './components/Interface';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Interface />
    </>
  );
};

export default App;
