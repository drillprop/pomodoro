import React, { FC } from 'react';
import { SubTitle } from '../../elements/Titles';

const IntervalsToday: FC<{ intervalsToday: number | null }> = ({
  intervalsToday
}) => {
  return (
    <>
      <SubTitle>today</SubTitle>
      <div>You've made {intervalsToday || 0} intervals today</div>
      <div>Intervals, Minutes, Better Than Yesterday, Better than Average</div>
    </>
  );
};

export default IntervalsToday;
