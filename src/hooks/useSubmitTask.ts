import { FormEvent, useState, ChangeEvent } from 'react';
import { createTask } from '../duck/timer/timerActions';
import { useDispatch } from 'react-redux';
import useTimerState from './useTimerState';

const useSubmitTask = (
  initInput: string = '',
  edit: boolean = false
): [string, any, any] => {
  const dispatch = useDispatch();

  const [input, setInput] = useState(initInput);

  const { tasks } = useTimerState().config;

  const handleInput = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (tasks.includes(input)) {
      setInput('');
      throw new Error(`Task ${input} already exists`);
    }
    if (input) {
      dispatch(createTask(input.toLowerCase()));
      setInput('');
    }
  };
  return [input, handleInput, handleSubmit];
};

export default useSubmitTask;
