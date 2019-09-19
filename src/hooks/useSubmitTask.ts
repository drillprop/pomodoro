import { FormEvent, useState, ChangeEvent } from 'react';
import { createTaskStart, editTaskStart } from '../duck/tasks/tasksActions';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../duck/store';

const useSubmitTask = (
  initInput: string = '',
  edit: boolean = false
): [string, any, any] => {
  const dispatch = useDispatch();

  const [input, setInput] = useState(initInput);

  const tasks = useSelector(({ tasks }: ReduxState) => tasks.tasks);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (Object.keys(tasks).includes(input) && input !== initInput) {
      throw new Error(`Task ${input} already exists`);
    }

    if (input.match(/[,.\/]/g)) {
      throw new Error('Tasks cannot contains:  . , /');
    }

    if (input) {
      if (!edit) {
        dispatch(createTaskStart(input.toLowerCase()));
        setInput('');
      } else {
        dispatch(editTaskStart(initInput, input.toLowerCase()));
      }
    } else {
      setInput(initInput);
    }
  };
  return [input, handleInput, handleSubmit];
};

export default useSubmitTask;
