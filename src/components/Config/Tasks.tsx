import React from 'react';
import { SubTitle } from '../../elements/Titles';
import styled from 'styled-components';
import Task from './Task';
import CreateNewTask from './CreateNewTask';
import { useSelector } from 'react-redux';

const StyledUl = styled.ul`
  padding: 0;
`;

const Tasks = () => {
  const tasks = useSelector((state: any) => state.tasksReducer.tasks);
  return (
    <>
      <SubTitle>tasks</SubTitle>
      <StyledUl>
        {Object.keys(tasks)
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
