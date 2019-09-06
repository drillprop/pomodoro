import React, { FC } from 'react';
import useSubmitTask from '../../hooks/useSubmitTask';
import { EditCreateTask } from '../../elements/Forms';

const CreateNewTask: FC<{
  setAsNew: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setAsNew }) => {
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
      <button type='submit' onClick={() => setAsNew(true)}>
        + add task
      </button>
    </EditCreateTask>
  );
};

export default CreateNewTask;
