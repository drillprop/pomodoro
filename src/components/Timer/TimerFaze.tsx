import React from 'react';
import styled from 'styled-components';
import { secondFont } from '../../utils/fonts';
import { primary } from '../../utils/colors';
import useTimerState from '../../hooks/useTimerState';

const TimerTitle = styled.h3`
  font-family: ${secondFont};
  grid-row: 2;
  text-align: center;
  color: ${primary};
  font-size: 3.5rem;
  margin: 0;
`;

const TimerFaze = () => {
  const [, , , isInterval] = useTimerState();
  return <TimerTitle>{isInterval ? 'interval' : 'break'}</TimerTitle>;
};

export default TimerFaze;
