import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import { primFont, secondFont } from '../../utils/fonts';
import {
  secondary,
  background,
  secondaryBackground,
  primary
} from '../../utils/colors';
import { useDispatch } from 'react-redux';
import { createTask } from '../../duck/timer/timerActions';
import useTimerState from '../../hooks/useTimerState';

const StyledFormCreateTask = styled.form`
  border: solid 1px ${secondary};
  display: grid;
  grid-template-columns: 1fr 140px;
  border-radius: 5px;
  margin-bottom: 16px;

  input {
    padding: 10px 12px;
    background-color: ${background};
    font-family: ${primFont};
    color: ${primary};
    font-size: 20px;
    border: none;
  }
  button {
    border: none;
    width: 100%;
    cursor: pointer;
    background: ${secondaryBackground};
    font-family: ${secondFont};
    color: ${primary};
    font-weight: 700;
    text-transform: lowercase;
    border-radius: 5px;
  }
`;

const CreateNewTask = () => {
  const dispatch = useDispatch();
  const { tasks } = useTimerState().config;

  const [input, setInput] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (tasks.includes(input)) {
      setInput('');
      throw new Error(`Task ${input} already exists`);
    }

    dispatch(createTask(input.toLowerCase()));
    setInput('');
  };

  return (
    <StyledFormCreateTask onSubmit={handleSubmit}>
      <input
        maxLength={20}
        value={input}
        type='text'
        placeholder='new task'
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
      />
      <button type='submit'>+ add task</button>
    </StyledFormCreateTask>
  );
};

export default CreateNewTask;
