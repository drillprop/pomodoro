import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetTimer, skipBreak } from '../../../../duck/timer/timerActions';
import { StyledButton } from './ResetButton.styles';
import { selectIsInterval } from '../../../../duck/timer/timerSelectors';

const ResetButton: FC = () => {
  const dispatch = useDispatch();
  const isInterval = useSelector(selectIsInterval);

  const reset = () => {
    isInterval ? dispatch(resetTimer()) : dispatch(skipBreak());
  };
  return (
    <StyledButton type='button' onClick={reset} aria-label='reset timer'>
      {isInterval ? 'Reset' : 'Skip'}
    </StyledButton>
  );
};

export default ResetButton;
