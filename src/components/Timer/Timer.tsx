import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useTimerState from '../../hooks/useTimerState';
import useTimerMethods from '../../hooks/useTimerMethods';
import { convertSecToStr } from '../../utils/helpers';
import moment = require('moment');

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
  const { isTimerStart, seconds, timeAsString } = useTimerState();

  const [count, setCount] = useState(seconds);

  useEffect(() => {
    let timeout: any;
    if (isTimerStart && count) {
      timeout = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [count, isTimerStart]);

  console.log(count);

  return (
    <TimerWrapper>
      <Time>{timeAsString}</Time>
    </TimerWrapper>
  );
};

export default Timer;
