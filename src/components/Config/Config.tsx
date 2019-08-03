import React, { FC } from 'react';
import styled from 'styled-components';
import { secondFont } from '../../utils/fonts';
import { primary } from '../../utils/colors';
import ConfigForm from './ConfigForm';

const ConfigWrapper = styled.main`
  display: grid;
  margin-top: 100px;
  grid-template-rows: 100px 200px 200px;
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
      <ConfigForm formName='interval' />
      <ConfigForm formName='break' />
    </ConfigWrapper>
  );
};

export default Config;
