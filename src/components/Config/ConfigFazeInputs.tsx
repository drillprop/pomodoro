import React, { FC } from 'react';
import styled from 'styled-components';
import { primFont } from '../../utils/fonts';
import { primary, background, secondary } from '../../utils/colors';
import { SubTitle } from '../../elements/Titles';

type ConfigFazeInputs = {
  faze: string;
  update: any;
  timeleft: any;
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

const ConfigFazeInputs: FC<ConfigFazeInputs> = ({ faze, timeleft, update }) => {
  return (
    <>
      <SubTitle>{faze.split('Time')[0]} time</SubTitle>
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
