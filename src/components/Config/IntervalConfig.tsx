import React, { FC } from 'react';
import { ConfigForm } from './Config';

const IntervalConfig = () => {
  return (
    <ConfigForm>
      <h3>interval time</h3>
      <label htmlFor='int-hr'>
        <input type='number' min={0} max={24} id='int-hr' /> hr
      </label>
      <label htmlFor='int-min'>
        <input type='number' min={0} max={59} id='int-min' /> min
      </label>
      <label htmlFor='int-sec'>
        <input type='number' min={0} max={59} id='int-sec' /> sec
      </label>
      <button type='submit'>save</button>
    </ConfigForm>
  );
};

export default IntervalConfig;
