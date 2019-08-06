import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useTimerState from '../../hooks/useTimerState';
import useTimerMethods from '../../hooks/useTimerMethods';

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
  // const { startPause, fazeSwitch, updateSeconds } = useTimerMethods();
  const [count, setCount] = useState(0);

  const countTimer = () => {
    let timeout = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    if (count === seconds) clearTimeout(timeout);
  };

  useEffect(() => {
    countTimer();
    if (count === seconds) {
      console.log('done');
    }
    // let timeout: NodeJS.Timeout;
    // if (isTimerStart)
    //   timeout = setTimeout(() => {
    //     updateSeconds(seconds - 1);
    //     !seconds && startPause();
    //     !seconds && fazeSwitch();
    //   }, 1000);
    // return () => {
    //   clearTimeout(timeout);
    // };
  }, [count]);

  return (
    <TimerWrapper>
      <Time>{timeAsString}</Time>
    </TimerWrapper>
  );
};

export default Timer;
