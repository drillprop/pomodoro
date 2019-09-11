import React, { FC } from 'react';
import { SubTitle } from '../../elements/Titles';
import styled from 'styled-components';
import Task from './Task';
import CreateNewTask from './CreateNewTask';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../duck/store';
import { useTransition, animated } from 'react-spring';

const StyledUl = styled.ul`
  padding: 0;
`;

const Tasks: FC = () => {
  const tasks = useSelector(({ tasks }: ReduxState) =>
    Object.keys(tasks.tasks).filter((task: string) => task !== 'default')
  );

  const transitions = useTransition(tasks, tasks, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 'auto' },
    leave: { display: 'none' }
  });

  return (
    <>
      <SubTitle>tasks</SubTitle>
      <StyledUl>
        {transitions.map(({ item, props, key }) => {
          return (
            <animated.div key={key} style={props}>
              <Task task={item} />
            </animated.div>
          );
        })}
        <CreateNewTask />
      </StyledUl>
    </>
  );
};

export default Tasks;
