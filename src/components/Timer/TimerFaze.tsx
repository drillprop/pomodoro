import React from 'react';
import { MainTitle } from '../../elements/Titles';
import useTimerState from '../../hooks/useTimerState';

const TimerFaze = () => {
  const state = useTimerState();
  return <MainTitle>{state.isInterval ? 'interval' : 'break'}</MainTitle>;
};

export default TimerFaze;
