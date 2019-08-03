import * as React from 'react';
import GlobalStyle from '../utils/GlobalStyle';
import Router from './Router';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
