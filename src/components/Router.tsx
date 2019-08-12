import React from 'react';
import { Route } from 'react-router-dom';
import Config from '../pages/config/Config';
import Interface from '../pages/timer/Interface';
import Register from '../pages/registerlogin/Register';

const Router = () => {
  return (
    <>
      <Route path='/config' component={Config} />
      <Route path='/register' component={Register} />
      <Route exact path='/' component={Interface} />
    </>
  );
};

export default Router;
