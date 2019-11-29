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
  selectEveryTasks
} from '../../../duck/tasks/taskSelectors';

interface Selectors {
  tasks: any;
  isLoading: boolean;
}

const tasksSelectors = createStructuredSelector<ReduxState, Selectors>({
  tasks: selectEveryTasks,
  isLoading: selectIsTasksLoading
});

const Tasks: FC = () => {
  const { tasks, isLoading } = useSelector(tasksSelectors);

  return (
    <>
      <SubTitle>tasks</SubTitle>
      <StyledUl isLoading={isLoading}>
        {tasks &&
          Object.keys(tasks)
            .filter(task => task !== 'default')
            .map(task => <Task task={task} key={task} />)}
        <CreateNewTask />
      </StyledUl>
    </>
  );
};

export default Tasks;
