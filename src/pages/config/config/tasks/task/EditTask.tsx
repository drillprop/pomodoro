import React, { FC, FormEvent } from 'react';
import useSubmitTask from '../../../../../hooks/useSubmitTask';
import { EditCreateTask } from '../CreateNewTask.styles';

const EditTask: FC<{
  task: string;
  setAsEditable: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ task, setAsEditable }) => {
  const [input, editTask, saveTask] = useSubmitTask(task, true);

  const handleSubmit = (e: FormEvent) => {
    saveTask(e);
    setAsEditable(false);
  };

  return (
    <EditCreateTask onSubmit={handleSubmit}>
      <input type='text' value={input} onChange={editTask} />
      <button type='submit'>Save</button>
    </EditCreateTask>
  );
};

export default EditTask;
