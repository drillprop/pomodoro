import React, { FC, FormEvent, ChangeEvent } from 'react';
import styled from 'styled-components';
import { primFont, secondFont } from '../../utils/fonts';
import { primary, background, secondaryBackground } from '../../utils/colors';
import useInput from '../../hooks/useInput';

type ConfigFormProps = {
  name: string;
};

export const StyledForm = styled.form`
  input {
    font-family: ${primFont};
    font-size: 1.5rem;
    margin: 0 auto;
    width: 45px;
    color: ${primary};
    background-color: ${background};
    border: solid 1px ${secondaryBackground};
  }
  h3 {
    font-size: 2rem;
    font-family: ${secondFont};
    color: ${primary};
    text-align: center;
  }
  label {
    font-size: 1.5rem;
    margin-right: 20px;
  }
  button {
    border: none;
    margin-top: 2em;
    display: block;
    width: 100%;
    background: ${secondaryBackground};
    height: 3em;
    font-size: 1rem;
    font-family: ${secondFont};
    color: ${primary};
    font-weight: 700;
    text-transform: lowercase;
  }
`;

const ConfigForm: FC<ConfigFormProps> = ({ name }) => {
  const [setValue, submitValues, values] = useInput({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  return (
    <StyledForm onSubmit={(e: FormEvent) => submitValues(e)} name={name}>
      <h3>{name} time</h3>
      <label htmlFor={`${name}-hr`}>
        <input
          value={values.hours}
          type='number'
          name='hours'
          min={0}
          max={24}
          id={`${name}-hr`}
          onChange={(e: ChangeEvent) => setValue(e)}
        />{' '}
        hr
      </label>
      <label htmlFor={`${name}-min`}>
        <input
          value={values.minutes}
          type='number'
          name='minutes'
          min={0}
          max={59}
          id={`${name}-min`}
          onChange={(e: ChangeEvent) => setValue(e)}
        />{' '}
        min
      </label>
      <label htmlFor={`${name}-sec`}>
        <input
          value={values.seconds}
          type='number'
          name='seconds'
          min={0}
          max={59}
          id={`${name}-sec`}
          onChange={(e: ChangeEvent) => setValue(e)}
        />{' '}
        sec
      </label>
      <button type='submit'>save</button>
    </StyledForm>
  );
};

export default ConfigForm;
