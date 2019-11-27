import React, { FC, lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { ReduxState } from '../../../duck/store';
import Loading from '../../Loading/Loading';
import Config from '../../../pages/config/Config';
import Sign from '../../../pages/sign/Sign';
import Interface from '../../../pages/timer/Interface';
import withLoading from '../../withLoading';
import ProtectedRoute from '../../ProtectedRoute/ProtectedRoute';

const Stats = lazy(() => import('../../../pages/stats/Stats'));

const Router: FC = () => {
  const user = useSelector(({ user }: ReduxState) => user.currentUser);
  const isLoading = useSelector(
    ({ user, timer }: ReduxState) => user.isGettingUser || timer.isFetching
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      //
    }
  }, [user]);

  return (
    <>
      <ProtectedRoute
        path='/config'
        isAuth={!!user}
        component={() => <Config />}
      />
      <Suspense fallback={<Loading />}>
        <ProtectedRoute path='/stats' isAuth={!!user} component={Stats} />
      </Suspense>
      <Route
        exact
        path='/sign'
        render={() => (!user ? <Sign /> : <Redirect to='/' />)}
      />
      <Route
        exact
        path='/'
        render={() =>
          !user && !isLoading ? <Redirect to='/sign' /> : <Interface />
        }
      />
    </>
  );
};

export default Router;
