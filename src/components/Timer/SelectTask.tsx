import React, { FC } from 'react';
import styled from 'styled-components';
import { primFont } from '../../utils/fonts';
import { secondary, background } from '../../utils/colors';
import { useDispatch, useSelector } from 'react-redux';
import { switchTask } from '../../duck/tasks/tasksActions';
import { ReduxState } from '../../duck/store';

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

const SelectTask: FC = () => {
  const dispatch = useDispatch();
  const { tasks, selectedTask } = useSelector(({ tasks }: ReduxState) => tasks);

  return (
    <Select
      value={selectedTask}
      onChange={e => dispatch(switchTask(e.currentTarget.value))}
    >
      {Object.keys(tasks).map(key => (
        <option key={key}>{key}</option>
      ))}
    </Select>
  );
};

export default SelectTask;
