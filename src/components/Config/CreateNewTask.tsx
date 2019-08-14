import React, { useState } from 'react';
import styled from 'styled-components';
import { primFont, secondFont } from '../../utils/fonts';
import {
  secondary,
  background,
  secondaryBackground,
  primary
} from '../../utils/colors';

const StyledFormCreateTask = styled.form`
  border: solid 1px ${secondary};
  display: flex;
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
  return (
    <StyledFormCreateTask onSubmit={() => console.log('task created')}>
      <input type='text' placeholder='new task' />
      <button type='submit'>+ add task</button>
    </StyledFormCreateTask>
  );
};

export default CreateNewTask;
