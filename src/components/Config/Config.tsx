import React, { FC } from 'react';
import styled from 'styled-components';
import { secondFont } from '../../utils/fonts';
import ConfigForm from './ConfigFazeInputs';
import { Link } from 'react-router-dom';
import { MainTitle } from '../../elements/Titles';
import { SubmitButtom } from '../../elements/Forms';
import useForm from '../../hooks/useForm';

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
  const [timeleft, update, submit] = useForm();

  return (
    <ConfigWrapper>
      <MainTitle>config</MainTitle>
      <form onSubmit={submit}>
        <ConfigForm faze='intervalTime' update={update} timeleft={timeleft} />
        <ConfigForm faze='breakTime' update={update} timeleft={timeleft} />
        <SubmitButtom type='submit'>save</SubmitButtom>
      </form>
      <GoBackLink>
        <Link to='/'>back</Link>
      </GoBackLink>
    </ConfigWrapper>
  );
};

export default Config;
