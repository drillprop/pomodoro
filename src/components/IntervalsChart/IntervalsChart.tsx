import React, { FC } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { primary } from '../../utils/colors';

const IntervalsChart: FC<{ stats: any }> = ({ stats }) => {
  return (
    <BarChart width={500} height={300} data={stats}>
      <Bar dataKey='intervals' fill={primary} />
      <XAxis dataKey='null' name='date' />
      <YAxis interval={0} />
      <Tooltip
        cursor={false}
        content={MyCustomTooltip}
        isAnimationActive={false}
      />
      <Legend />
    </BarChart>
  );
};

const MyCustomTooltip: FC = (props: any) => {
  if (props.payload[0]) {
    return (
      <div
        style={{
          backgroundColor: 'white',
          border: `1px solid ${primary}`,
          padding: 10
        }}
      >
        date: {props.payload[0].payload.date}
        <br />
        intervals: {props.payload[0].payload.intervals}
      </div>
    );
  }
  return null;
};

export default IntervalsChart;
