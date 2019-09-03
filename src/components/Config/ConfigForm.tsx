import React, { FC } from 'react';
import ConfigFazeInputs from './ConfigFazeInputs';
import useChangeTime from '../../hooks/useChangeTime';
import { SubmitButtom } from '../../elements/Forms';

const ConfigForm: FC = () => {
  const [timeleft, update, submit] = useChangeTime();

  return (
    <form style={{ marginTop: '30px' }} onSubmit={submit}>
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
