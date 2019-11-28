import React, { FC } from 'react';
import { MainTitle } from '../../../elements/Titles';
import { useSelector } from 'react-redux';
import { selectIsInterval } from '../../../duck/timer/timerSelectors';

const TimerFaze: FC = () => {
  const isInterval = useSelector(selectIsInterval);
  return <MainTitle>{isInterval ? 'interval' : 'break'}</MainTitle>;
};

export default TimerFaze;
