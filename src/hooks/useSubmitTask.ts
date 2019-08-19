import { FormEvent, useState, ChangeEvent } from 'react';
import { createTask, editTask } from '../duck/tasks/tasksActions';
import { useDispatch, useSelector } from 'react-redux';

const useSubmitTask = (
  initInput: string = '',
  edit: boolean = false
): [string, any, any] => {
  const dispatch = useDispatch();

  const [input, setInput] = useState(initInput);

  const tasks = useSelector((state: any) => state.tasksReducer.tasks);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (input) {
      if (!edit) {
        if (Object.keys(tasks).includes(input)) {
          setInput('');
          throw new Error(`Task ${input} already exists`);
        }
        dispatch(createTask(input.toLowerCase()));
        setInput('');
      } else {
        dispatch(editTask(initInput, input.toLowerCase()));
      }
    }
  };
  return [input, handleInput, handleSubmit];
};

export default useSubmitTask;
