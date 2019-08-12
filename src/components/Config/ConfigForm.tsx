import React from 'react';
import ConfigFazeInputs from './ConfigFazeInputs';
import useForm from '../../hooks/useForm';
import { SubmitButtom } from '../../elements/Forms';

const ConfigForm = () => {
  const [timeleft, update, submit] = useForm();

  return (
    <form onSubmit={submit}>
      <ConfigFazeInputs
        faze='intervalTime'
        update={update}
        timeleft={timeleft}
      />
      <ConfigFazeInputs faze='breakTime' update={update} timeleft={timeleft} />
      <SubmitButtom type='submit'>save</SubmitButtom>
    </form>
  );
};

export default ConfigForm;
