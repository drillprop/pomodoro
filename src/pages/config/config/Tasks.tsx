import React, { FC } from 'react';
import { SubTitle } from '../../../elements/Titles';
import Task from './tasks/Task';
import CreateNewTask from './CreateNewTask';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../../duck/store';
import { StyledUl } from './Tasks.styles';

const Tasks: FC = () => {
  const tasks = useSelector(({ tasks }: ReduxState) => {
    console.log(tasks);
    return tasks
      ? Object.keys(tasks.tasks).filter((task: string) => task !== 'default')
      : [];
  });
  const { isLoading } = useSelector(({ tasks }: ReduxState) => tasks);

  return (
    <>
      <SubTitle>tasks</SubTitle>
      <StyledUl isLoading={isLoading}>
        {tasks && tasks.map(task => <Task task={task} key={task} />)}
        <CreateNewTask />
      </StyledUl>
    </>
  );
};

export default Tasks;
