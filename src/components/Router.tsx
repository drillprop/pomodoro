import React from 'react';
import { Route } from 'react-router-dom';
import Config from '../pages/config/Config';
import Interface from '../pages/timer/Interface';
import Sign from '../pages/sign/Sign';

const Router = () => {
  return (
    <>
      <Route path='/config' component={Config} />
      <Route path='/sign' component={Sign} />
      <Route exact path='/' component={Interface} />
    </>
  );
};

export default Router;
