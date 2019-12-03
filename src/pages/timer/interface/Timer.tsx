import React from 'react';
import useTimer from '../../../hooks/useTimer';
import { convertTimeToStr } from '../../../utils/helpers';
import { Time, TimerWrapper } from './Timer.styles';

const Timer: React.FC = () => {
  const count = useTimer();

  const timeAsString = convertTimeToStr(count);
  return (
    <TimerWrapper>
      <Time>{timeAsString}</Time>
    </TimerWrapper>
  );
};

export default Timer;
