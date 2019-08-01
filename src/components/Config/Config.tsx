import React, { FC } from 'react';
import styled from 'styled-components';
import { secondFont } from '../../utils/fonts';
import { primary } from '../../utils/colors';

const ConfigWrapper = styled.main`
  display: grid;
  margin-top: 100px;
  grid-template-rows: 150px 200px;
  justify-content: center;
`;
const ConfigTitle = styled.h2`
  font-family: ${secondFont};
  text-align: center;
  font-weight: 600;
  color: ${primary};
  font-size: 3.5rem;
  line-height: 0.9;
  margin: 0;
`;

const Config: FC = () => {
  return (
    <ConfigWrapper>
      <ConfigTitle>config</ConfigTitle>
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
