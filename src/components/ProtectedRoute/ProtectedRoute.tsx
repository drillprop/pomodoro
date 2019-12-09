import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router';

interface Props {
  path: string;
  isAuth: boolean;
  component: React.FC;
}

const ProtectedRoute: React.FC<Props & RouteProps> = ({
  path,
  isAuth,
  component: Component,
  ...otherProps
}) => {
  return (
    <Route
      {...otherProps}
      path={path}
      render={(props: any) =>
        isAuth ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
};

export default ProtectedRoute;
