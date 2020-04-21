import React from 'react';
import useTimer from '../../../hooks/useTimer';
import { convertTimeToStr } from '../../../utils/helpers';
import { Time, TimerWrapper } from './Timer.styles';
import Tomato from './Tomato';

const Timer: React.FC = () => {
  const count = useTimer();

  const timeAsString =
    count > 0 ? convertTimeToStr(count) : convertTimeToStr(0);
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
