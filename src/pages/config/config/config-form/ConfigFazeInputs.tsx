import React, { FC } from 'react';
import {
  StyledConfigInput,
  StyledConfigLabel
} from './ConfigFazeInputs.styles';
import Heading from '../../../../components/Heading/Heading';

type ConfigFazeInputs = {
  faze: string;
  update: any;
  timeleft: any;
};

const ConfigFazeInputs: FC<ConfigFazeInputs> = ({ faze, timeleft, update }) => {
  return (
    <>
      <Heading level='h2' mtop={28}>
        {faze.split('Time')[0]} time
      </Heading>
      <StyledConfigLabel htmlFor={`${faze}-min`}>
        <StyledConfigInput
          value={timeleft[faze].minutes}
          type='number'
          name={`${faze}-minutes`}
          min={0}
          max={999}
          id={`${faze}-min`}
          onChange={update}
        />{' '}
        min
      </StyledConfigLabel>
      <StyledConfigLabel htmlFor={`${faze}-sec`}>
        <StyledConfigInput
          value={timeleft[faze].seconds}
          type='number'
          name={`${faze}-sec`}
          min={0}
          max={59}
          id={`${faze}-sec`}
          onChange={update}
        />{' '}
        sec
      </StyledConfigLabel>
    </>
  );
};

export default ConfigFazeInputs;
