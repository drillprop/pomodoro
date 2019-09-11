import React, { FC } from 'react';
import { SubTitle } from '../../elements/Titles';
import styled from 'styled-components';
import Task from './Task';
import CreateNewTask from './CreateNewTask';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../duck/store';

const StyledUl = styled.ul`
  padding: 0;
`;

const Tasks: FC = () => {
  const tasks = useSelector(({ tasks }: ReduxState) =>
    Object.keys(tasks.tasks).filter((task: string) => task !== 'default')
  );

  return (
    <>
      <SubTitle>tasks</SubTitle>
      <StyledUl>
        {tasks.map((task: string) => {
          return <Task task={task} key={task} />;
        })}
        <CreateNewTask />
      </StyledUl>
    </>
  );
};

export default Tasks;
