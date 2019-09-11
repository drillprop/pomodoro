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
import Stats from '../pages/stats/Stats';

const WithLoadingInterface = withLoading(Interface);
const WithLoadingStats = withLoading(Stats);
const WithLoadingConfig = withLoading(Config);

const Router: FC = () => {
  const user = useSelector(({ user }: ReduxState) => user.user);
  const isLoading = useSelector(
    ({ user, timer }: ReduxState) => user.isGettingUser || timer.isFetching
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
    if (user) {
      dispatch(getInitialState());
    }
  }, [user]);

  return (
    <>
      <Route
        path='/config'
        render={() =>
          !user && !isLoading ? (
            <Redirect to='/sign' />
          ) : (
            <WithLoadingConfig isLoading={isLoading} />
          )
        }
      />
      <Route
        path='/stats'
        render={() =>
          !user && !isLoading ? (
            <Redirect to='/sign' />
          ) : (
            <WithLoadingStats isLoading={isLoading} />
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
          !user && !isLoading ? (
            <Redirect to='/sign' />
          ) : (
            <WithLoadingInterface isLoading={isLoading} />
          )
        }
      />
    </>
  );
};

export default Router;
