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
  const {
    isTimerStart,
    isInterval,
    endTime,
    breakTime,
    intervalTime
  } = useTimerState();

  const seconds = isInterval ? intervalTime : breakTime;

  const [count, setCount] = useState(seconds);

  const fazeSwitch = () => {
    dispatch(switchFaze(isInterval));
  };

  useEffect(() => {
    let timeout: any;

    const timeleft = countTimeLeft(Date.now(), endTime);

    if (isTimerStart && count) {
      timeout = setTimeout(() => {
        setCount(timeleft);
      }, 1000);
    }

    if (!count && isTimerStart) {
      clearTimeout(timeout);
      fazeSwitch();
    }

    return () => {
      clearTimeout(timeout);
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
