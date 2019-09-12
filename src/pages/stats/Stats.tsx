import React from 'react';
import { MainTitle } from '../../elements/Titles';
import styled from 'styled-components';
import IntervalsContainer from '../../components/Stats/IntervalsContainer';

const StatsWrapper = styled.main`
  display: grid;
  margin-top: 100px;
  justify-content: center;
`;

const Stats = () => {
  return (
    <StatsWrapper>
      <MainTitle>stats</MainTitle>
      <IntervalsContainer />
    </StatsWrapper>
  );
};

export default Stats;
