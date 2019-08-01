import React, { FC } from 'react';
import styled from 'styled-components';
import { secondFont, primFont } from '../../utils/fonts';
import {
  primary,
  secondary,
  background,
  secondaryBackground
} from '../../utils/colors';
import IntervalConfig from './IntervalConfig';
import BreakConfig from './BreakConfig';

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

export const ConfigForm = styled.form`
  input {
    font-family: ${primFont};
    font-size: 1.5rem;
    margin: 0 auto;
    width: 45px;
    color: ${primary};
    background-color: ${background};
    border: solid 1px ${secondaryBackground};
  }
  h3 {
    font-size: 2rem;
    font-family: ${secondFont};
    color: ${primary};
    text-align: center;
  }
  label {
    font-size: 1.5rem;
    margin-right: 20px;
  }
  button {
    border: none;
    margin-top: 2em;
    display: block;
    width: 100%;
    background: ${secondaryBackground};
    height: 3em;
    font-size: 1rem;
    font-family: ${secondFont};
    color: ${primary};
    font-weight: 700;
    text-transform: lowercase;
  }
`;

const Config: FC = () => {
  return (
    <ConfigWrapper>
      <ConfigTitle>config</ConfigTitle>
      <IntervalConfig />
      <BreakConfig />
    </ConfigWrapper>
  );
};

export default Config;
