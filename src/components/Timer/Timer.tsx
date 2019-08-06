import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useTimerState from '../../hooks/useTimerState';
import useTimerMethods from '../../hooks/useTimerMethods';
import { convertSecToStr } from '../../utils/helpers';

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
  const { startPause, fazeSwitch, updateSeconds } = useTimerMethods();
  const [count, setCount] = useState(seconds);

  const countTimer = () => {
    return setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  };

  useEffect(() => {
    let timeout: any;
    if (isTimerStart) {
      timeout = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    }
    console.log('render');
    if (!isTimerStart) clearTimeout(timeout);
    // let timeout: NodeJS.Timeout;
    // if (isTimerStart)
    //   timeout = setTimeout(() => {
    //     updateSeconds(seconds - 1);
    // !count && startPause();
    // !count && fazeSwitch();
    //   }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [count, isTimerStart]);

  return (
    <TimerWrapper>
      <Time>{convertSecToStr(count)}</Time>
    </TimerWrapper>
  );
};

export default Timer;
