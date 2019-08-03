import * as React from 'react';
import GlobalStyle from './utils/GlobalStyle';
import HamburgerButton from './components/Menu/HamburgerButton';
import { useSelector } from 'react-redux';
import Menu from './components/Menu/Menu';
import { HashRouter, Route } from 'react-router-dom';
import Config from './components/Config/Config';
import Interface from './components/Timer/Interface';

const App: React.FC = () => {
  const isMenuVisible = useSelector((state: any) => state.isMenuVisible);
  return (
    <>
      <GlobalStyle />
      <HamburgerButton />
      <HashRouter>
        {isMenuVisible && <Menu />}
        <Route path='/config' component={Config} />
        <Route exact path='/' component={Interface} />
      </HashRouter>
    </>
  );
};

export default App;
