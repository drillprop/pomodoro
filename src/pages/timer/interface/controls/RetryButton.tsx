import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../../../duck/store';
import { resetTimer, startTimer } from '../../../../duck/timer/timerActions';
import { StyledRetryButton } from './RetryButton.styles';
import {
  selectTimeleft,
  selectIsInterval
} from '../../../../duck/timer/timerSelectors';
import { createStructuredSelector } from 'reselect';

interface Selectors {
  timeleft: number;
  isInterval: boolean;
}

const retryButtonSelector = createStructuredSelector<ReduxState, Selectors>({
  timeleft: selectTimeleft,
  isInterval: selectIsInterval
});

const RetryButton: FC = () => {
  const dispatch = useDispatch();
  const { timeleft, isInterval } = useSelector(retryButtonSelector);
  const { selectedTask } = useSelector(({ tasks }: ReduxState) => tasks);

  const retry = async () => {
    await dispatch(resetTimer());
    dispatch(
      startTimer({ startTime: Date.now(), timeleft, selectedTask, isInterval })
    );
  };

  return <StyledRetryButton onClick={retry}>Retry</StyledRetryButton>;
};

export default RetryButton;
