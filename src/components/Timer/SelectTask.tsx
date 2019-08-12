import React from 'react';
import styled from 'styled-components';
import { primFont } from '../../utils/fonts';
import { secondary, background } from '../../utils/colors';
import useTimerState from '../../hooks/useTimerState';
import { useDispatch } from 'react-redux';
import { switchTask } from '../../duck/timer/timerActions';

const Select = styled.select`
  font-family: ${primFont};
  font-size: 1.5rem;
  display: block;
  margin: 0 auto;
  color: ${secondary};
  background: none;
  border: none;
  padding: 0;
  text-align: center;
  padding: 0.3em 1em;
  text-align-last: center;
  :focus {
    outline-color: ${secondary};
  }

  option {
    text-align: left;
    background-color: ${background};
    border: none;
  }
`;

const SelectTask = () => {
  const dispatch = useDispatch();
  const { tasks } = useTimerState();

  const switchCtg = (taskName: string) => {
    dispatch(switchTask(taskName));
  };

  return (
    <Select onChange={e => switchCtg(e.currentTarget.value)}>
      {Object.keys(tasks).map(key => (
        <option key={key}>{key}</option>
      ))}
    </Select>
  );
};

export default SelectTask;
