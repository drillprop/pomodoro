import React, { FC } from 'react';
import { ConfigForm } from './Config';

const BreakConfig = () => {
  return (
    <ConfigForm>
      <h3>break time</h3>
      <label htmlFor='break-hr'>
        <input type='number' min={0} max={24} id='break-hr' /> hr
      </label>
      <label htmlFor='break-min'>
        <input type='number' min={0} max={59} id='break-min' /> min
      </label>
      <label htmlFor='break-sec'>
        <input type='number' min={0} max={59} id='break-sec' /> sec
      </label>
      <button type='submit'>save</button>
    </ConfigForm>
  );
};

export default BreakConfig;
