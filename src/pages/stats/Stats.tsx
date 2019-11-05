import React from 'react';
import IntervalsContainer from '../../components/Stats/IntervalsContainer';
import { MainTitle } from '../../elements/Titles';
import { StatsWrapper } from './Stats.styles';

const Stats = () => {
  return (
    <StatsWrapper>
      <MainTitle>stats</MainTitle>
      <IntervalsContainer />
    </StatsWrapper>
  );
};

export default Stats;
