import React from 'react';
import styled from 'styled-components';
import { secondFont } from '../../utils/fonts';
import { primary } from '../../utils/colors';
import useTimerState from '../../hooks/useTimerState';

const TimerTitle = styled.h2`
  font-family: ${secondFont};
  text-align: center;
  font-weight: 600;
  color: ${primary};
  font-size: 3.5rem;
  line-height: 0.9;
  margin: 0;
`;

const TimerFaze = () => {
  const [, , , isInterval] = useTimerState();
  return <TimerTitle>{isInterval ? 'interval' : 'break'}</TimerTitle>;
};

export default TimerFaze;
