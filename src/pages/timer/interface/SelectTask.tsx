import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../../duck/store';
import { switchTaskStart } from '../../../duck/tasks/tasksActions';
import { createStructuredSelector } from 'reselect';
import {
  selectEveryTasks,
  selectSelectedTask
} from '../../../duck/tasks/taskSelectors';
import Select from '../../../components/Select/Select';

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
      selected={selectedTask}
      onChange={e => dispatch(switchTaskStart(e.currentTarget.value))}
      selectors={Object.keys(tasks)}
    />
  );
};

export default SelectTask;
