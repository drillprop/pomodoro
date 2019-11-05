import React, { FC } from 'react';
import { SubTitle } from '../../../../elements/Titles';
import IntervalsChart from '../../../../components/IntervalsChart/IntervalsChart';

const IntervalsToday: FC<{ stats: any }> = ({ stats }) => {
  return (
    <>
      <SubTitle>last 7 days</SubTitle>
      <IntervalsChart stats={stats(7)}></IntervalsChart>
      <SubTitle>last 30 days</SubTitle>
      <IntervalsChart stats={stats(30)}></IntervalsChart>
    </>
  );
};

export default IntervalsToday;
