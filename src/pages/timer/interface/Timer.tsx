import React from 'react';
import useTimer from '../../../hooks/useTimer';
import { convertSecToStr } from '../../../utils/helpers';
import { Time, TimerWrapper } from './Timer.styles';

const Timer: React.FC = () => {
  const count = useTimer();

  const timeAsString = convertSecToStr(count);
  return (
    <TimerWrapper>
      <Time>{timeAsString}</Time>
    </TimerWrapper>
  );
};

export default Timer;
