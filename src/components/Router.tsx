import React, { FC, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Config from '../pages/config/Config';
import Interface from '../pages/timer/Interface';
import Sign from '../pages/sign/Sign';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxState } from '../duck/store';
import { getCurrentUser } from '../duck/users/userActions';
import withLoading from './withLoading';
import { getInitialState } from '../duck/timer/timerActions';

const WithLoadingInterface = withLoading(Interface);
const WithLoadingConfig = withLoading(Config);

const Router: FC = () => {
  const user = useSelector(({ user }: ReduxState) => user.user);
  const dispatch = useDispatch();
  const { isGettingUser } = useSelector(({ user }: ReduxState) => user);

  useEffect(() => {
    dispatch(getCurrentUser());
    dispatch(getInitialState());
  }, []);

  return (
    <>
      <Route
        path='/config'
        render={() =>
          !user && !isGettingUser ? (
            <Redirect to='/sign' />
          ) : (
            <WithLoadingConfig isLoading={isGettingUser} />
          )
        }
      />
      <Route
        path='/sign'
        render={() => (!user ? <Sign /> : <Redirect to='/' />)}
      />
      <Route
        exact
        path='/'
        render={() =>
          !user && !isGettingUser ? (
            <Redirect to='/sign' />
          ) : (
            <WithLoadingInterface isLoading={isGettingUser} />
          )
        }
      />
    </>
  );
};

export default Router;
