import React, { FC } from 'react';

const withLoading = (Component: FC) => (
  isLoading: boolean,
  ...otherProps: any
) => {
  return isLoading ? (
    <div>Loading</div>
  ) : (
    <Component {...otherProps}></Component>
  );
};

export default withLoading;
