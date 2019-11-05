import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTaskStart } from '../../../../duck/tasks/tasksActions';
import EditTask from '../EditTask';
import { StyledTask, StyledTaskButton } from './Task.styles';

const Task: FC<{
  task: string;
}> = ({ task }) => {
  const dispatch = useDispatch();

  const [editable, setAsEditable] = useState(false);

  return editable ? (
    <EditTask setAsEditable={setAsEditable} task={task} />
  ) : (
    <StyledTask>
      {task}
      <div>
        <StyledTaskButton onClick={() => setAsEditable(true)}>
          Edit
        </StyledTaskButton>
        <StyledTaskButton onClick={() => dispatch(deleteTaskStart(task))}>
          Delete
        </StyledTaskButton>
      </div>
    </StyledTask>
  );
};

export default Task;
