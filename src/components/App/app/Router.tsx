import React, { FC, lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { ReduxState } from '../../../duck/store';
import { selectIsFetching } from '../../../duck/timer/timerSelectors';
import {
  selectCurrentUser,
  selectIsGettingUser
} from '../../../duck/users/userSelectors';
import Config from '../../../pages/config/Config';
import Sign from '../../../pages/sign/Sign';
import Interface from '../../../pages/timer/Interface';
import Loading from '../../Loading/Loading';
import ProtectedRoute from '../../ProtectedRoute/ProtectedRoute';

const Stats = lazy(() => import('../../../pages/stats/Stats'));

interface Selectors {
  isLoading: boolean;
  user: any;
}

const RouterSelectors = createStructuredSelector<ReduxState, Selectors>({
  user: selectCurrentUser,
  isLoading: selectIsGettingUser || selectIsFetching
});

const Router: FC = () => {
  const { user, isLoading } = useSelector(RouterSelectors);

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
