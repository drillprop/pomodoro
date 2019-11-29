import React from 'react';
import { MainTitle } from '../../elements/Titles';
import { StatsWrapper } from './Stats.styles';
import StatsChartsContainer from './stats/StatsChartsContainer';

const Stats = () => {
  return (
    <StatsWrapper>
      <MainTitle>stats</MainTitle>
      <StatsChartsContainer days={30} />
    </StatsWrapper>
  );
};

export default Stats;
