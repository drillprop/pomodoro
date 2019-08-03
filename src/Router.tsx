import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Config from './components/Config/Config';
import Interface from './components/Timer/Interface';
import { useSelector } from 'react-redux';

const Router = () => {
  const isMenuVisible = useSelector((state: any) => state.isMenuVisible);
  return (
    <HashRouter>
      {isMenuVisible && <Route component={Menu} />}
      <Route path='/config' component={Config} />
      <Route exact path='/' component={Interface} />
    </HashRouter>
  );
};

export default Router;
