import React, { FC } from 'react';
import styled from 'styled-components';
import { secondaryBackground, primary } from '../../../utils/colors';
import { secondFont } from '../../../utils/fonts';
import { startTimer, resetTimer } from '../../../duck/timer/timerActions';
import { useDispatch, useSelector } from 'react-redux';
import useTimerState from '../../../hooks/useTimerState';
import { ReduxState } from '../../../duck/store';

const ResetandRetryButtons = styled.button`
  border: none;
  background: ${secondaryBackground};
  width: 140px;
  height: 3em;
  font-size: 1rem;
  font-family: ${secondFont};
  color: ${primary};
  font-weight: 700;
  text-transform: lowercase;
  align-self: center;
  grid-row: 1;
`;

const StyledButton = styled(ResetandRetryButtons)`
  border-radius: 0 21px 21px 0;
  grid-column: 2;
  padding-left: 1em;
`;

const RetryButton: FC = () => {
  const dispatch = useDispatch();
  const { isTimerStart, isInterval, timeleft } = useTimerState();
  const { selectedTask } = useSelector(({ tasks }: ReduxState) => tasks);

  const retry = async () => {
    await dispatch(resetTimer());
    dispatch(
      startTimer(Date.now(), !isTimerStart, isInterval, timeleft, selectedTask)
    );
  };

  return <StyledButton onClick={retry}>Retry</StyledButton>;
};

export default RetryButton;
