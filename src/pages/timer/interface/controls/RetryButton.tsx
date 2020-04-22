import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../../../duck/store';
import { resetTimer, startTimer } from '../../../../duck/timer/timerActions';
import { StyledRetryButton } from './RetryButton.styles';
import {
  selectTimeleft,
  selectIsInterval,
} from '../../../../duck/timer/timerSelectors';
import { createStructuredSelector } from 'reselect';
import { selectSelectedTask } from '../../../../duck/tasks/taskSelectors';

interface Selectors {
  timeleft: number;
  isInterval: boolean;
  selectedTask: string;
}

const retryButtonSelector = createStructuredSelector<ReduxState, Selectors>({
  timeleft: selectTimeleft,
  isInterval: selectIsInterval,
  selectedTask: selectSelectedTask,
});

const RetryButton: FC = () => {
  const dispatch = useDispatch();
  const { timeleft, isInterval, selectedTask } = useSelector(
    retryButtonSelector
  );

  const retry = async () => {
    await dispatch(resetTimer());
    dispatch(
      startTimer({ startTime: Date.now(), timeleft, selectedTask, isInterval })
    );
  };

  return (
    <StyledRetryButton type='button' onClick={retry} aria-label='retry timer'>
      Retry
    </StyledRetryButton>
  );
};

export default RetryButton;
