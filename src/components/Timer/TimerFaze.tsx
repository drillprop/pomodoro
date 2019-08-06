import React from 'react';
import { MainTitle } from '../../elements/Titles';
import useTimerState from '../../hooks/useTimerState';

const TimerFaze = () => {
  const { isInterval } = useTimerState();
  return <MainTitle>{isInterval ? 'interval' : 'break'}</MainTitle>;
};

export default TimerFaze;
