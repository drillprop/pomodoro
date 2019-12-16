import React from 'react';
import { Route, RouteProps } from 'react-router';
import NoUserPage from './protected-route/NoUserPage';

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
        isAuth ? <Component {...props} /> : <NoUserPage />
      }
    />
  );
};

export default ProtectedRoute;
