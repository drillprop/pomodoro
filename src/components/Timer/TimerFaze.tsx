import React from 'react';
import styled from 'styled-components';
import { secondFont } from '../../utils/fonts';
import { primary } from '../../utils/colors';
import useTimer from '../../hooks/useTimer';
import { MainTitle } from '../../elements/Titles';

const TimerFaze = () => {
  const [state] = useTimer();
  return <MainTitle>{state.isInterval ? 'interval' : 'break'}</MainTitle>;
};

export default TimerFaze;
