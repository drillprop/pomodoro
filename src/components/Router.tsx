import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Config from './Config/Config';
import Interface from './Timer/Interface';

const Router = () => {
  return (
    <HashRouter>
      <Route path='/config' component={Config} />
      <Route exact path='/' component={Interface} />
    </HashRouter>
  );
};

export default Router;
