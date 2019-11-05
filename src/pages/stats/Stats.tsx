import React from 'react';
import IntervalsChartContainer from './stats/IntervalsChartContainer';
import { MainTitle } from '../../elements/Titles';
import { StatsWrapper } from './Stats.styles';

const Stats = () => {
  return (
    <StatsWrapper>
      <MainTitle>stats</MainTitle>
      <IntervalsChartContainer />
    </StatsWrapper>
  );
};

export default Stats;
