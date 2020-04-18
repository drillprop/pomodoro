import styled from 'styled-components';
import { primary, reds } from '../../utils/colors';

export const ProgressBarWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 30;
  height: 7px;
`;

export const ProgressBarLine = styled.div<{ length: number }>`
  width: 100%;
  height: 7px;
  background-color: ${reds[0]};
  transform: ${({ length }) => `scaleX(${length})`};
  transform-origin: left;
  transition: transform ${({ length }) => (length > 0 ? 1000 : 200)}ms linear;
`;
