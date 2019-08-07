import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useTimerState from '../../hooks/useTimerState';
import { convertSecToStr, countTimeLeft } from '../../utils/helpers';
import { useDispatch } from 'react-redux';
import { switchFaze } from '../../duck/timer/timerActions';

const TimerWrapper = styled.section`
  text-align: center;
  margin-bottom: 3em;
`;
const Time = styled.h1`
  display: center;
  font-size: 5rem;
  margin: 0;
  line-height: 0.75em;
`;

const Timer: React.FC = () => {
  const dispatch = useDispatch();
  const { isTimerStart, isInterval, endTime, timeleft } = useTimerState();

  const [count, setCount] = useState(timeleft);

  const fazeSwitch = () => {
    dispatch(switchFaze(isInterval));
  };

  useEffect(() => {
    let timeoutTimer: any;
    let timeoutSwitch: any;

    if (!isTimerStart) setCount(timeleft);

    const left = countTimeLeft(Date.now(), endTime);

    if (isTimerStart && count) {
      timeoutTimer = setTimeout(() => {
        setCount(left);
      }, 1000);
    }

    if (!count && isTimerStart) {
      clearTimeout(timeoutTimer);
      timeoutSwitch = setTimeout(() => fazeSwitch(), 1000);
    }

    return () => {
      clearTimeout(timeoutTimer);
      clearTimeout(timeoutSwitch);
    };
  }, [count, isTimerStart]);

  const timeAsString = convertSecToStr(count);
  return (
    <TimerWrapper>
      <Time>{timeAsString}</Time>
    </TimerWrapper>
  );
};

export default Timer;
