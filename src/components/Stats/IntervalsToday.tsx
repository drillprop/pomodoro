import React, { FC } from 'react';
import { SubTitle } from '../../elements/Titles';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from 'recharts';

const IntervalsToday: FC<{ stats: any }> = ({ stats }) => {
  console.log(stats);
  return (
    <>
      <SubTitle>daily statistics</SubTitle>
      <BarChart width={730} height={250} data={stats} layout={'horizontal'}>
        <CartesianGrid strokeDasharray='3 3' />
        <Bar dataKey='intervals' fill='#8884d8' />
        <XAxis dataKey='null' />
        <YAxis />
        <Tooltip />
        <Legend />
      </BarChart>
    </>
  );
};

export default IntervalsToday;
