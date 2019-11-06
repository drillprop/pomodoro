import React, { FC, lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { ReduxState } from '../../../duck/store';
import Loading from '../../Loading/Loading';
import Config from '../../../pages/config/Config';
import Sign from '../../../pages/sign/Sign';
import Interface from '../../../pages/timer/Interface';
import withLoading from '../../withLoading';
import { fetchInitialStateStart } from '../../../duck/timer/timerActions';

const WithLoadingInterface = withLoading(Interface);
const Stats = lazy(() => import('../../../pages/stats/Stats'));
const WithLoadingConfig = withLoading(Config);

const Router: FC = () => {
  const user = useSelector(({ user }: ReduxState) => user.user);
  const isLoading = useSelector(
    ({ user, timer }: ReduxState) => user.isGettingUser || timer.isFetching
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchInitialStateStart());
    }
  }, [user]);

  return (
    <>
      <Route
        path='/config'
        render={() =>
          !user ? (
            <Redirect to='/sign' />
          ) : (
            <WithLoadingConfig isLoading={isLoading} />
          )
        }
      />
      <Suspense fallback={<Loading />}>
        <Route
          path='/stats'
          render={() => (!user ? <Redirect to='/sign' /> : <Stats />)}
        />
      </Suspense>
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
