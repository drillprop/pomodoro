import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../../duck/store';
import { switchTaskStart } from '../../../duck/tasks/tasksActions';
import { Select } from './SelectTask.styles';
import { createStructuredSelector } from 'reselect';
import {
  selectEveryTasks,
  selectSelectedTask
} from '../../../duck/tasks/taskSelectors';

interface Selectors {
  tasks: any;
  selectedTask: string;
}

const taskSelectors = createStructuredSelector<ReduxState, Selectors>({
  tasks: selectEveryTasks,
  selectedTask: selectSelectedTask
});

const SelectTask: FC = () => {
  const dispatch = useDispatch();
  const { tasks, selectedTask } = useSelector(taskSelectors);

  return (
    <Select
      value={selectedTask}
      onChange={e => dispatch(switchTaskStart(e.currentTarget.value))}
    >
      {tasks && Object.keys(tasks).map(key => <option key={key}>{key}</option>)}
    </Select>
  );
};

export default SelectTask;
