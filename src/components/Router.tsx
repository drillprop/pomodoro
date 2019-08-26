import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Config from '../pages/config/Config';
import Interface from '../pages/timer/Interface';
import Sign from '../pages/sign/Sign';
import { useSelector } from 'react-redux';
import { ReduxState } from '../duck/store';

const Router = () => {
  const user = useSelector(({ user }: ReduxState) => user.user);
  return (
    <>
      <Route
        path='/config'
        render={() => (user ? <Config /> : <Redirect to='/sign' />)}
      />
      <Route
        path='/sign'
        render={() => (!user ? <Sign /> : <Redirect to='/' />)}
      />
      <Route
        exact
        path='/'
        render={() => (user ? <Interface /> : <Redirect to='/sign' />)}
      />
    </>
  );
};

export default Router;
