import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../../duck/store';
import { switchTaskStart } from '../../../duck/tasks/tasksActions';
import { Select } from './SelectTask.styles';

const SelectTask: FC = () => {
  const dispatch = useDispatch();
  const { tasks, selectedTask } = useSelector(({ tasks }: ReduxState) => tasks);

  return (
    <Select
      value={selectedTask}
      onChange={e => dispatch(switchTaskStart(e.currentTarget.value))}
    >
      {Object.keys(tasks).map(key => (
        <option key={key}>{key}</option>
      ))}
    </Select>
  );
};

export default SelectTask;
