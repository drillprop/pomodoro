import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectIsInterval } from '../../../duck/timer/timerSelectors';
import Heading from '../../../components/Heading/Heading';

const TimerFaze: FC = () => {
  const isInterval = useSelector(selectIsInterval);
  return <Heading level='h1'>{isInterval ? 'interval' : 'break'}</Heading>;
};

export default TimerFaze;
