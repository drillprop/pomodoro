import React, { useState } from 'react';
import Heading from '../../components/Heading/Heading';
import { StatsWrapper } from './Stats.styles';
import StatsChartsContainer from './stats/StatsChartsContainer';
import GoBackLink from '../../components/GoBackLink/GoBackLink';
import Select from '../../components/Select/Select';

const Stats = () => {
  const selectors = ['7 days', '14 days', '30 days'];
  const [days, setHowManyDays] = useState(selectors[0]);
  return (
    <StatsWrapper>
      <Heading level='h1'>stats</Heading>
      <Select
        selected={days}
        selectors={selectors}
        onChange={e => setHowManyDays(e.currentTarget.value)}
      />
      <StatsChartsContainer days={parseInt(days.split(' ')[0])} />
      <GoBackLink>back</GoBackLink>
    </StatsWrapper>
  );
};

export default Stats;
