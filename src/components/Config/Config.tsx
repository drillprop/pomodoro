import React, { FC, FormEvent } from 'react';
import styled from 'styled-components';
import { secondFont } from '../../utils/fonts';
import ConfigForm from './ConfigFazeInputs';
import { Link } from 'react-router-dom';
import { MainTitle } from '../../elements/Titles';
import { SubmitButtom } from '../../elements/Forms';
import useInput from '../../hooks/useInput';
import { useDispatch } from 'react-redux';
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
  const [intervalTimeleft, updateIntervalTimeleft] = useInput('intervalTime');
  const [breakTimeleft, updateBreakTimeleft] = useInput('breakTime');
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const intervalSeconds =
      intervalTimeleft.seconds + intervalTimeleft.minutes * 60;
    const breakSeconds = breakTimeleft.seconds + breakTimeleft.minutes * 60;

    dispatch(setTimers(intervalSeconds, 'intervalTime'));
    dispatch(setTimers(breakSeconds, 'breakTime'));
  };

  return (
    <ConfigWrapper>
      <MainTitle>config</MainTitle>
      <form onSubmit={handleSubmit}>
        <ConfigForm
          faze='intervalTime'
          update={updateIntervalTimeleft}
          timeleft={intervalTimeleft}
        />
        <ConfigForm
          faze='breakTime'
          update={updateBreakTimeleft}
          timeleft={breakTimeleft}
        />
        <SubmitButtom type='submit'>save</SubmitButtom>
      </form>
      <GoBackLink>
        <Link to='/'>back</Link>
      </GoBackLink>
    </ConfigWrapper>
  );
};

export default Config;
