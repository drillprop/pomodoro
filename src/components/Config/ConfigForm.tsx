import React, { FC, FormEvent, ChangeEvent } from 'react';
import styled from 'styled-components';
import { primFont } from '../../utils/fonts';
import { primary, background, secondary } from '../../utils/colors';
import useInput from '../../hooks/useInput';
import { SubTitle } from '../../elements/Titles';
import { SubmitButtom } from '../../elements/Forms';

type ConfigFormProps = {
  formName: string;
};

const StyledConfigInput = styled.input`
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
`;
const StyledConfigLabel = styled.label`
  font-size: 1.5rem;
  margin-right: 20px;
`;

const ConfigForm: FC<ConfigFormProps> = ({ formName }) => {
  const [setValue, submitValues, values] = useInput(formName);

  return (
    <form onSubmit={(e: FormEvent) => submitValues(e)} name={formName}>
      <SubTitle>{formName} time</SubTitle>
      <StyledConfigLabel htmlFor={`${formName}-min`}>
        <StyledConfigInput
          value={values.minutes}
          type='number'
          name='minutes'
          min={0}
          max={999}
          id={`${formName}-min`}
          onChange={(e: ChangeEvent) => setValue(e)}
        />{' '}
        min
      </StyledConfigLabel>
      <StyledConfigLabel htmlFor={`${formName}-sec`}>
        <StyledConfigInput
          value={values.seconds}
          type='number'
          name='seconds'
          min={0}
          max={59}
          id={`${formName}-sec`}
          onChange={(e: ChangeEvent) => setValue(e)}
        />{' '}
        sec
      </StyledConfigLabel>
      <SubmitButtom type='submit'>save</SubmitButtom>
    </form>
  );
};

export default ConfigForm;
