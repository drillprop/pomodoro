import React, { FC } from 'react';
import styled from 'styled-components';
import { primFont, secondFont } from '../../utils/fonts';
import { secondary, secondaryBackground, primary } from '../../utils/colors';

const StyledTask = styled.li`
  display: grid;
  grid-template-columns: 1fr 140px;
  background: ${secondaryBackground};
  padding-left: 12px;
  justify-content: space-between;
  align-items: center;
  font-family: ${primFont};
  border: solid 1px ${secondary};
  border-radius: 5px;
  font-size: 20px;
  margin-bottom: 16px;
`;
const StyledButton = styled.button`
  padding: 10px 12px;
  width: 50%;
  border: none;
  cursor: pointer;
  background: ${secondaryBackground};
  font-family: ${secondFont};
  color: ${primary};
  font-weight: 700;
  text-transform: lowercase;
`;

const Task: FC<{ task: string }> = ({ task }) => {
  return (
    <StyledTask>
      {task}
      <div>
        <StyledButton>Edit</StyledButton>
        <StyledButton>Delete</StyledButton>
      </div>
    </StyledTask>
  );
};

export default Task;
