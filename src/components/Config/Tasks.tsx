import React from 'react';
import useTimerState from '../../hooks/useTimerState';
import { SubTitle } from '../../elements/Titles';
import styled from 'styled-components';
import Task from './Task';

const StyledUl = styled.ul`
  padding: 0;
`;

const Tasks = () => {
  const { tasks } = useTimerState().config;
  return (
    <>
      <SubTitle>tasks</SubTitle>
      <StyledUl>
        {tasks.map((task: string) => {
          return <Task task={task} key={task} />;
        })}
        <li style={{ cursor: 'pointer' }}>+ add task</li>
      </StyledUl>
    </>
  );
};

export default Tasks;
