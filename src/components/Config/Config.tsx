import React, { FC } from 'react';
import styled from 'styled-components';
import { secondFont } from '../../utils/fonts';
import { primary } from '../../utils/colors';
import ConfigForm from './ConfigForm';
import { Link } from 'react-router-dom';
import { MainTitle } from '../../elements/Titles';

const ConfigWrapper = styled.main`
  display: grid;
  margin-top: 100px;
  grid-template-rows: 100px 1fr 1fr 100px;
  justify-content: center;
`;

const GoBackLink = styled.h4`
  font-family: ${secondFont};
  text-align: right;
  margin-right: 16px;
`;

const Config: FC = () => {
  return (
    <ConfigWrapper>
      <MainTitle>config</MainTitle>
      <ConfigForm formName='interval' />
      <ConfigForm formName='break' />
      <GoBackLink>
        <Link to='/'>back</Link>
      </GoBackLink>
    </ConfigWrapper>
  );
};

export default Config;
