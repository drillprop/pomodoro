import React, { FC } from 'react';
import { SubTitle } from '../../elements/Titles';

const IntervalsToday: FC<{
  intervalsToday: number | null;
  intervalsOverall: number | null;
}> = ({ intervalsToday, intervalsOverall }) => {
  return (
    <>
      <SubTitle>daily statistics</SubTitle>
      <h3>today you've done:</h3>
      <ul>
        <li>{intervalsToday || 0} intervals</li>
        <li>which is 30 minutes in total</li>
        <li>which is better/worse than your average</li>
        <li>and better/worse than yesterday</li>
      </ul>
      <h3>this week you've done:</h3>
      <ul>
        <li>{intervalsOverall} intervals </li>
        <li>which is 30 minutes in total</li>
      </ul>
      <h3>overall you've done:</h3>
      <ul>
        <li>{intervalsOverall} intervals </li>
        <li>which is 30 minutes in total</li>
      </ul>
    </>
  );
};

export default IntervalsToday;
