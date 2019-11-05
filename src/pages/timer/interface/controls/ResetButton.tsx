import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../../../duck/store';
import { resetTimer, skipBreak } from '../../../../duck/timer/timerActions';
import { incIntervalInFirestore } from '../../../../duck/timer/timerUtils';
import useTimerState from '../../../../hooks/useTimerState';
import { StyledButton } from './ResetButton.styles';

const ResetButton: FC = () => {
  const dispatch = useDispatch();
  const { selectedTask } = useSelector(({ tasks }: ReduxState) => tasks);
  const { isInterval } = useTimerState();

  const skip = () => {
    dispatch(skipBreak());
    incIntervalInFirestore(selectedTask);
  };

  const reset = () => {
    isInterval ? dispatch(resetTimer()) : skip();
  };
  return (
    <StyledButton onClick={reset}>{isInterval ? 'Reset' : 'Skip'}</StyledButton>
  );
};

export default ResetButton;
