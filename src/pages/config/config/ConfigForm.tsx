import React, { FC } from 'react';
import useChangeTime from '../../../hooks/useChangeTime';
import ConfigFazeInputs from './config-form/ConfigFazeInputs';
import Button from '../../../components/Button/Button';

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
      <Button mtop={32} type='submit'>
        save
      </Button>
    </form>
  );
};

export default ConfigForm;
