import React, { FC } from 'react';
import { useTransition, animated } from 'react-spring';
import Loading from '../elements/Loading';

const withLoading = (Component: FC) => ({ isLoading, ...otherProps }: any) => {
  const transitions = useTransition(isLoading, null, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  return (
    <>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <animated.div style={props} key={key}>
            <Loading />
          </animated.div>
        ) : (
          <animated.div style={props} key={key}>
            <Component {...otherProps}></Component>
          </animated.div>
        )
      )}
    </>
  );
};

export default withLoading;
