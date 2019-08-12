import React, { FC } from 'react';
import styled from 'styled-components';
import { primFont } from '../../utils/fonts';
import { secondary } from '../../utils/colors';

const StyledTask = styled.li`
  display: flex;
  justify-content: space-between;
  font-family: ${primFont};
  border: solid 1px ${secondary};
  border-radius: 5px;
  font-size: 20px;
  padding: 10px 12px;
  margin-bottom: 16px;
`;
const DeleteButton = styled.button``;
const EditButton = styled.button``;
const Task: FC<{ task: string }> = ({ task }) => {
  return (
    <StyledTask>
      {task}
      <div>
        <DeleteButton>X</DeleteButton>
        <EditButton>Edit</EditButton>
      </div>
    </StyledTask>
  );
};

export default Task;
