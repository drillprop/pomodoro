import React, { FC, lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { ReduxState } from '../../../duck/store';
import { selectCurrentUser } from '../../../duck/users/userSelectors';
import Config from '../../../pages/config/Config';
import Login from '../../../pages/login/Login';
import Register from '../../../pages/register/Register';
import Interface from '../../../pages/timer/Interface';
import Loading from '../../Loading/Loading';
import ProtectedRoute from '../../ProtectedRoute/ProtectedRoute';

const Stats = lazy(() => import('../../../pages/stats/Stats'));

interface Selectors {
  user: any;
}

const RouterSelectors = createStructuredSelector<ReduxState, Selectors>({
  user: selectCurrentUser,
});

const Router: FC = () => {
  const { user } = useSelector(RouterSelectors);

  return (
    <>
      <Route exact path='/' component={Interface} />
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
        path='/login'
        render={() => (!user ? <Login /> : <Redirect to='/' />)}
      />
      <Route
        exact
        path='/register'
        render={() => (!user ? <Register /> : <Redirect to='/' />)}
      />
    </>
  );
};

export default Router;
