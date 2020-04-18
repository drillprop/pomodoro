import React from 'react';
import useTimer from '../../../hooks/useTimer';
import { convertTimeToStr } from '../../../utils/helpers';
import { Time, TimerWrapper } from './Timer.styles';
import Tomato from './Tomato';

const Timer: React.FC = () => {
  const count = useTimer();

  const timeAsString = convertTimeToStr(count);
  return (
    <>
      <Tomato count={count} />
      <TimerWrapper>
        <Time>{timeAsString}</Time>
      </TimerWrapper>
    </>
  );
};

export default Timer;
