import React from 'react';
import styled from 'styled-components';
import useTimerState from '../../hooks/useTimerState';

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
  const state = useTimerState();
  return (
    <TimerWrapper>
      <Time>{state.timeAsString}</Time>
    </TimerWrapper>
  );
};

export default Timer;
