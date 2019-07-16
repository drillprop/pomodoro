import React from 'react';
import styled from 'styled-components';
import { secondFont } from '../utils/fonts';
import { secondary } from '../utils/colors';
import useTimerState from '../hooks/useTimerState';

const TimerWrapper = styled.section`
  grid-row: 4;
  text-align: center;
  grid-column: 3/4;
  margin-bottom: 3em;
`;
const TimerFaze = styled.h3`
  display: center;
  font-family: ${secondFont};
  color: ${secondary};
  font-size: 2rem;
  margin: 0;
`;
const Time = styled.h1`
  display: center;
  font-size: 6rem;
  margin: 0;
  line-height: 0.75em;
`;

const Timer: React.FC = () => {
  const [, timeString, , isInterval] = useTimerState();
  return (
    <TimerWrapper>
      <TimerFaze>{isInterval ? 'interval' : 'break'}</TimerFaze>
      <Time>{timeString}</Time>
    </TimerWrapper>
  );
};

export default Timer;
