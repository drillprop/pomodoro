import React, { FC } from 'react';
import styled from 'styled-components';
import { primary } from '../utils/colors';
import { useTransition, animated } from 'react-spring';

const LoadingWrapper = styled.main`
  display: grid;
  height: 80vh;
  align-content: center;
  justify-content: center;
`;

const Spinner = styled.div`
  background: ${primary};
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;

  ::before,
  ::after {
    background: ${primary};
    animation: load1 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }

  margin: 88px auto;
  position: relative;
  transform: translateZ(0);
  animation-delay: -0.16s;

  ::before,
  ::after {
    position: absolute;
    top: 0;
    content: '';
  }
  ::before {
    left: -1.5em;
    animation-delay: -0.32s;
  }
  ::after {
    left: 1.5em;
  }
  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
`;

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
            <LoadingWrapper>
              <Spinner />
            </LoadingWrapper>
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
