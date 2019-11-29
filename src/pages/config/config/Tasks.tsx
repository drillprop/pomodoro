import React, { FC } from 'react';
import { SubTitle } from '../../../elements/Titles';
import Task from './tasks/Task';
import CreateNewTask from './CreateNewTask';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../../duck/store';
import { StyledUl } from './Tasks.styles';
import { createStructuredSelector } from 'reselect';
import {
  selectIsTasksLoading,
  selectTasksForConfig
} from '../../../duck/tasks/taskSelectors';

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
      <SubTitle>tasks</SubTitle>
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
