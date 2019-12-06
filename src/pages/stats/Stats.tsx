import React from 'react';
import Heading from '../../components/Heading/Heading';
import { StatsWrapper } from './Stats.styles';
import StatsChartsContainer from './stats/StatsChartsContainer';

const Stats = () => {
  return (
    <StatsWrapper>
      <Heading level='h1'>stats</Heading>
      <StatsChartsContainer days={30} />
    </StatsWrapper>
  );
};

export default Stats;
