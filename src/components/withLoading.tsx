import React, { FC } from 'react';
import styled from 'styled-components';
import { primary } from '../utils/colors';

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
  return isLoading ? (
    <LoadingWrapper>
      <Spinner />
    </LoadingWrapper>
  ) : (
    <Component {...otherProps}></Component>
  );
};

export default withLoading;
