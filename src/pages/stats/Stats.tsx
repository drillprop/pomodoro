import React from 'react';
import Heading from '../../components/Heading/Heading';
import { StatsWrapper } from './Stats.styles';
import StatsChartsContainer from './stats/StatsChartsContainer';
import GoBackLink from '../../components/GoBackLink/GoBackLink';

const Stats = () => {
  return (
    <StatsWrapper>
      <Heading level='h1'>stats</Heading>
      <StatsChartsContainer days={30} />
      <GoBackLink>back</GoBackLink>
    </StatsWrapper>
  );
};

export default Stats;
