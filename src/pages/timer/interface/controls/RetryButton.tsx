import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../../../duck/store';
import { resetTimer, startTimer } from '../../../../duck/timer/timerActions';
import useTimerState from '../../../../hooks/useTimerState';
import { StyledRetryButton } from './RetryButton.styles';

const RetryButton: FC = () => {
  const dispatch = useDispatch();
  const { isTimerStart, isInterval, timeleft } = useTimerState();
  const { selectedTask } = useSelector(({ tasks }: ReduxState) => tasks);

  const retry = async () => {
    await dispatch(resetTimer());
    dispatch(startTimer(Date.now(), timeleft));
  };

  return <StyledRetryButton onClick={retry}>Retry</StyledRetryButton>;
};

export default RetryButton;
