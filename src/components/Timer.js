import React from 'react';
import styled from 'styled-components';
import { secondFont } from '../utils/fonts';
import { secondary } from '../utils/colors';

const TimerWrapper = styled.section`
  grid-row: 3;
  text-align: center;
  grid-column: 3/4;
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

const Timer = () => {
  return (
    <TimerWrapper>
      <TimerFaze>interval</TimerFaze>
      <Time>30:00</Time>
    </TimerWrapper>
  );
};

export default Timer;
