import React from 'react';
import {
  Route,
  Redirect,
  RouterProps,
  RouteProps,
  RouteComponentProps
} from 'react-router';

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
        isAuth ? <Component {...props} /> : <Redirect to='/sign' />
      }
    />
  );
};

export default ProtectedRoute;
