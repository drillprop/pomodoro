import React, { useState } from 'react';
import useTimerState from '../../hooks/useTimerState';
import { SubTitle } from '../../elements/Titles';
import styled from 'styled-components';
import Task from './Task';
import CreateNewTask from './CreateNewTask';

const StyledUl = styled.ul`
  padding: 0;
`;

const Tasks = () => {
  const { tasks } = useTimerState().config;
  return (
    <>
      <SubTitle>tasks</SubTitle>
      <StyledUl>
        {tasks
          .filter((task: string) => task !== 'default')
          .map((task: string) => {
            return <Task task={task} key={task} />;
          })}
        <CreateNewTask />
      </StyledUl>
    </>
  );
};

export default Tasks;
