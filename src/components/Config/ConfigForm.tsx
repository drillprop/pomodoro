import React, { FC, FormEvent, ChangeEvent } from 'react';
import styled from 'styled-components';
import { primFont, secondFont } from '../../utils/fonts';
import { primary, background, secondary } from '../../utils/colors';
import useInput from '../../hooks/useInput';
import { SubTitle } from '../../elements/Titles';
import { SubmitButtom } from '../../elements/Forms';

type ConfigFormProps = {
  formName: string;
};

export const StyledForm = styled.form`
  input {
    font-family: ${primFont};
    font-size: 20px;
    margin: 0 auto;
    width: 70px;
    padding: 8px;
    color: ${primary};
    background-color: ${background};
    border: solid 1px ${secondary};
    border-radius: 5px;
    margin-left: 16px;
  }
  label {
    font-size: 1.5rem;
    margin-right: 20px;
  }
`;

const ConfigForm: FC<ConfigFormProps> = ({ formName }) => {
  const [setValue, submitValues, values] = useInput(formName);

  return (
    <StyledForm onSubmit={(e: FormEvent) => submitValues(e)} name={formName}>
      <SubTitle>{formName} time</SubTitle>
      <label htmlFor={`${formName}-min`}>
        <input
          value={values.minutes}
          type='number'
          name='minutes'
          min={0}
          max={999}
          id={`${formName}-min`}
          onChange={(e: ChangeEvent) => setValue(e)}
        />{' '}
        min
      </label>
      <label htmlFor={`${formName}-sec`}>
        <input
          value={values.seconds}
          type='number'
          name='seconds'
          min={0}
          max={59}
          id={`${formName}-sec`}
          onChange={(e: ChangeEvent) => setValue(e)}
        />{' '}
        sec
      </label>
      <SubmitButtom type='submit'>save</SubmitButtom>
    </StyledForm>
  );
};

export default ConfigForm;
