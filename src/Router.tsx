import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Config from './components/Config/Config';
import Interface from './components/Timer/Interface';

const Router = () => {
  return (
    <HashRouter>
      <Route component={Menu} />
      <Route path='/config' component={Config} />
      <Route exact path='/' component={Interface} />
    </HashRouter>
  );
};

export default Router;
