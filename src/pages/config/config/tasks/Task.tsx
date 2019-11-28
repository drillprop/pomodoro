import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTaskStart } from '../../../../duck/tasks/tasksActions';
import EditTask from './task/EditTask';
import { StyledTask, StyledTaskButton } from './Task.styles';
import { selectIsTasksLoading } from '../../../../duck/tasks/taskSelectors';

const Task: FC<{
  task: string;
}> = ({ task }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsTasksLoading);

  const [editable, setAsEditable] = useState(false);

  return editable ? (
    <EditTask setAsEditable={setAsEditable} task={task} />
  ) : (
    <StyledTask>
      {task}
      <div>
        <StyledTaskButton
          disabled={isLoading}
          onClick={() => setAsEditable(true)}
        >
          Edit
        </StyledTaskButton>
        <StyledTaskButton
          disabled={isLoading}
          onClick={() => dispatch(deleteTaskStart(task))}
        >
          Delete
        </StyledTaskButton>
      </div>
    </StyledTask>
  );
};

export default Task;
