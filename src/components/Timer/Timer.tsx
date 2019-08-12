import React from 'react';
import styled from 'styled-components';
import { convertSecToStr } from '../../utils/helpers';
import useTimer from '../../hooks/useTimer';

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
  const count = useTimer();

  const timeAsString = convertSecToStr(count);
  return (
    <TimerWrapper>
      <Time>{timeAsString}</Time>
    </TimerWrapper>
  );
};

export default Timer;
