import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../../../duck/store';
import { pauseTimer, startTimer } from '../../../../duck/timer/timerActions';
import Icon from '../../../../components/Icon/Icon';
import { primary } from '../../../../utils/colors';
import { Pause, StyledPlayButton } from './PlayButton.styles';
import {
  selectIsTimerStart,
  selectTimeleft,
  selectIsInterval
} from '../../../../duck/timer/timerSelectors';
import { createStructuredSelector } from 'reselect';

interface Selectors {
  isTimerStart: boolean;
  timeleft: number;
  isInterval: boolean;
}

const playButtonSelector = createStructuredSelector<ReduxState, Selectors>({
  isTimerStart: selectIsTimerStart,
  timeleft: selectTimeleft,
  isInterval: selectIsInterval
});

const PlayButton: FC = () => {
  const dispatch = useDispatch();
  const { isTimerStart, timeleft, isInterval } = useSelector(
    playButtonSelector
  );
  const { selectedTask } = useSelector(({ tasks }: ReduxState) => tasks);

  const startPause = () => {
    isTimerStart
      ? dispatch(pauseTimer(Date.now()))
      : dispatch(
          startTimer({
            startTime: Date.now(),
            timeleft,
            selectedTask,
            isInterval
          })
        );
  };

  return (
    <StyledPlayButton isTimerStart={isTimerStart} onClick={startPause}>
      {isTimerStart ? <Pause /> : <Icon name='play' color={primary} />}
    </StyledPlayButton>
  );
};

export default PlayButton;
