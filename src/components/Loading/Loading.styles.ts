import styled from 'styled-components';
import { grays, reds } from '../../utils/colors';

export const LoadingWrapper = styled.main`
  display: grid;
  height: 50vh;
  align-content: center;
  justify-content: center;
`;

export const Spinner = styled.div`
  background: ${grays[0]};
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;

  ::before,
  ::after {
    background: ${grays[0]};
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
      box-shadow: 0 0 ${reds[0]};
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em ${reds[0]};
      height: 5em;
    }
  }
`;
