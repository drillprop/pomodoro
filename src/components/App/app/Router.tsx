import React, { FC, lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { ReduxState } from '../../../duck/store';
import { selectIsFetching } from '../../../duck/timer/timerSelectors';
import {
  selectCurrentUser,
  selectIsGettingUser
} from '../../../duck/users/userSelectors';
import Account from '../../../pages/account/Account';
import Config from '../../../pages/config/Config';
import Login from '../../../pages/login/Login';
import Register from '../../../pages/register/Register';
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

  return (
    <>
      <ProtectedRoute
        path='/config'
        isAuth={!!user}
        component={() => <Config />}
      />
      <ProtectedRoute path='/account' isAuth={!!user} component={Account} />
      <Suspense fallback={<Loading />}>
        <ProtectedRoute path='/stats' isAuth={!!user} component={Stats} />
      </Suspense>
      <Route
        exact
        path='/login'
        render={() => (!user ? <Login /> : <Redirect to='/' />)}
      />
      <Route
        exact
        path='/register'
        render={() => (!user ? <Register /> : <Redirect to='/' />)}
      />
      <Route
        exact
        path='/'
        render={() =>
          !user && !isLoading ? <Redirect to='/login' /> : <Interface />
        }
      />
    </>
  );
};

export default Router;
