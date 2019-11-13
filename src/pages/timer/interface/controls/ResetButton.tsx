import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../../../duck/store';
import { resetTimer, skipBreak } from '../../../../duck/timer/timerActions';
import useTimerState from '../../../../hooks/useTimerState';
import { StyledButton } from './ResetButton.styles';

const ResetButton: FC = () => {
  const dispatch = useDispatch();
  const { isInterval } = useTimerState();

  const reset = () => {
    isInterval ? dispatch(resetTimer()) : dispatch(skipBreak());
  };
  return (
    <StyledButton onClick={reset}>{isInterval ? 'Reset' : 'Skip'}</StyledButton>
  );
};

export default ResetButton;
