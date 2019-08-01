import React, { FC } from 'react';
import styled from 'styled-components';

const ConfigWrapper = styled.main`
  display: grid;
  grid-template-rows: 120px 140px 200px 100px;
  justify-content: center;
  height: 100vh;
`;

const Config: FC = () => {
  return (
    <ConfigWrapper>
      <h1>Config</h1>
      <form>
        <h3>Interval Time</h3>
        <input type='number' /> hr
        <input type='number' /> min
        <input type='number' /> sec
      </form>
      <form>
        <h3>Break Time</h3>
        <input type='number' /> hr
        <input type='number' /> min
        <input type='number' /> sec
      </form>
    </ConfigWrapper>
  );
};

export default Config;
