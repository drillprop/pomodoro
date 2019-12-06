import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Heading from '../../../components/Heading/Heading';
import { ReduxState } from '../../../duck/store';
import {
  selectIsTasksLoading,
  selectTasksForConfig
} from '../../../duck/tasks/taskSelectors';
import { StyledUl } from './Tasks.styles';
import CreateNewTask from './tasks/CreateNewTask';
import Task from './tasks/Task';

interface Selectors {
  tasks: Array<string>;
  isLoading: boolean;
}

const tasksSelectors = createStructuredSelector<ReduxState, Selectors>({
  tasks: selectTasksForConfig,
  isLoading: selectIsTasksLoading
});

const Tasks: FC = () => {
  const { tasks, isLoading } = useSelector(tasksSelectors);

  return (
    <>
      <Heading level='h2' mtop={48}>
        tasks
      </Heading>
      <StyledUl isLoading={isLoading}>
        {tasks.map(task => (
          <Task task={task} key={task} />
        ))}
        <CreateNewTask />
      </StyledUl>
    </>
  );
};

export default Tasks;
