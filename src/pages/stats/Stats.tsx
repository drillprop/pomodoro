import React from 'react';
import { MainTitle } from '../../elements/Titles';
import styled from 'styled-components';
import IntervalsToday from '../../components/Stats/IntervalsToday';
import IntervalsOverall from '../../components/Stats/IntervalsOverall';

const StatsWrapper = styled.main`
  display: grid;
  margin-top: 100px;
  justify-content: center;
`;

const Stats = () => {
  return (
    <StatsWrapper>
      <MainTitle>stats</MainTitle>
      <IntervalsToday />
      <IntervalsOverall />
    </StatsWrapper>
  );
};

export default Stats;
