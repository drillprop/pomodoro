import React, { FC } from 'react';
import { EditCreateTask } from '../../../elements/Forms';
import useSubmitTask from '../../../hooks/useSubmitTask';

const CreateNewTask: FC<{}> = () => {
  const [input, handleInput, handleSubmit] = useSubmitTask('');

  return (
    <EditCreateTask onSubmit={handleSubmit}>
      <input
        maxLength={20}
        value={input}
        type='text'
        placeholder='new task'
        onChange={handleInput}
      />
      <button type='submit'>+ add task</button>
    </EditCreateTask>
  );
};

export default CreateNewTask;
