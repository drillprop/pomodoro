import * as React from 'react';
import GlobalStyle from './utils/GlobalStyle';
import Interface from './components/Timer/Interface';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Interface />
    </>
  );
};

export default App;
