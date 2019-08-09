import React, { FC } from 'react';
import styled from 'styled-components';
import { secondFont, primFont } from '../../utils/fonts';
import { primary, background, secondary } from '../../utils/colors';
import ConfigForm from './ConfigForm';
import { Link } from 'react-router-dom';
import { MainTitle, SubTitle } from '../../elements/Titles';
import { SubmitButtom } from '../../elements/Forms';

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

const StyledConfigInput = styled.input`
  font-family: ${primFont};
  font-size: 20px;
  margin: 0 auto;
  width: 70px;
  padding: 8px;
  color: ${primary};
  background-color: ${background};
  border: solid 1px ${secondary};
  border-radius: 5px;
  margin-left: 16px;
`;
const StyledConfigLabel = styled.label`
  font-size: 1.5rem;
  margin-right: 20px;
`;

const Config: FC = () => {
  return (
    <ConfigWrapper>
      <MainTitle>config</MainTitle>
      <form>
        <SubTitle>interval time</SubTitle>
        <StyledConfigLabel htmlFor={`interval-min`}>
          <StyledConfigInput
            type='number'
            name='minutes'
            min={0}
            max={999}
            id={`interval-min`}
          />{' '}
          min
        </StyledConfigLabel>
        <StyledConfigLabel htmlFor={`interval-sec`}>
          <StyledConfigInput
            type='number'
            name='seconds'
            min={0}
            max={59}
            id={`interval-sec`}
          />{' '}
          sec
        </StyledConfigLabel>

        <SubTitle>break time</SubTitle>
        <StyledConfigLabel htmlFor={`break-min`}>
          <StyledConfigInput
            type='number'
            name='minutes'
            min={0}
            max={999}
            id={`break-min`}
          />{' '}
          min
        </StyledConfigLabel>
        <StyledConfigLabel htmlFor={`break-sec`}>
          <StyledConfigInput
            type='number'
            name='seconds'
            min={0}
            max={59}
            id={`break-sec`}
          />{' '}
          sec
        </StyledConfigLabel>
        <SubmitButtom type='submit'>save</SubmitButtom>
      </form>
      <GoBackLink>
        <Link to='/'>back</Link>
      </GoBackLink>
    </ConfigWrapper>
  );
};

export default Config;
