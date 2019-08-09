import React, { FC, FormEvent } from 'react';
import styled from 'styled-components';
import { secondFont } from '../../utils/fonts';
import ConfigForm from './ConfigFazeInputs';
import { Link } from 'react-router-dom';
import { MainTitle } from '../../elements/Titles';
import { SubmitButtom } from '../../elements/Forms';
import { useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm';
import { setTimers } from '../../duck/timer/timerActions';

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
  const [timeleft, update] = useForm();
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const intervalSeconds =
      timeleft.intervalTime.seconds + timeleft.intervalTime.minutes * 60;

    const breakSeconds =
      timeleft.breakTime.seconds + timeleft.breakTime.minutes * 60;

    dispatch(setTimers(intervalSeconds, 'intervalTime'));
    dispatch(setTimers(breakSeconds, 'breakTime'));
  };

  return (
    <ConfigWrapper>
      <MainTitle>config</MainTitle>
      <form onSubmit={handleSubmit}>
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
