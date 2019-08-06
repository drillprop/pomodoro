import React from 'react';
import styled from 'styled-components';
import Icon from '../../../elements/Icon';
import { primary, background } from '../../../utils/colors';
import useTimerState from '../../../hooks/useTimerState';
import useTimerMethods from '../../../hooks/useTimerMethods';

const StyledPlayButton = styled.button<{ isTimerStart: boolean }>`
  position: relative;
  height: 90px;
  justify-self: center;
  align-self: center;
  grid-column: 1/4;
  grid-row: 1;
  width: 90px;
  border: 7px solid ${primary};
  background-color: ${({ isTimerStart }) =>
    isTimerStart ? primary : background};
  border-radius: 100%;
`;

const Pause = styled.div`
  width: 11px;
  position: absolute;
  top: calc(50% - 13px);
  left: calc(50% - 16px);
  height: 27px;
  background-color: ${background};
  border-radius: 3px;
  ::after {
    content: '';
    position: absolute;
    margin-left: 15px;
    background-color: ${background};
    border-radius: 3px;
    width: 11px;
    height: 27px;
  }
`;

const PlayButton = () => {
  const { isTimerStart } = useTimerState();
  const { startPause } = useTimerMethods();
  return (
    <StyledPlayButton isTimerStart={isTimerStart} onClick={startPause}>
      {isTimerStart ? <Pause /> : <Icon name='play' color={primary} />}
    </StyledPlayButton>
  );
};

export default PlayButton;
