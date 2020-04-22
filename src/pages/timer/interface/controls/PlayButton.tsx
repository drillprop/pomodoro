import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Icon from '../../../../components/Icon/Icon';
import { ReduxState } from '../../../../duck/store';
import { selectSelectedTask } from '../../../../duck/tasks/taskSelectors';
import { pauseTimer, startTimer } from '../../../../duck/timer/timerActions';
import {
  selectIsInterval,
  selectIsTimerStart,
  selectTimeleft,
} from '../../../../duck/timer/timerSelectors';
import { reds } from '../../../../utils/colors';
import { Pause, StyledPlayButton } from './PlayButton.styles';

interface Selectors {
  isTimerStart: boolean;
  timeleft: number;
  isInterval: boolean;
  selectedTask: string;
}

const playButtonSelector = createStructuredSelector<ReduxState, Selectors>({
  isTimerStart: selectIsTimerStart,
  timeleft: selectTimeleft,
  isInterval: selectIsInterval,
  selectedTask: selectSelectedTask,
});

const PlayButton: FC = () => {
  const dispatch = useDispatch();
  const { isTimerStart, timeleft, isInterval, selectedTask } = useSelector(
    playButtonSelector
  );

  const startPause = () => {
    isTimerStart
      ? dispatch(pauseTimer(Date.now()))
      : dispatch(
          startTimer({
            startTime: Date.now(),
            timeleft,
            selectedTask,
            isInterval,
          })
        );
  };

  return (
    <StyledPlayButton
      type='button'
      isTimerStart={isTimerStart}
      onClick={startPause}
      aria-label={isTimerStart ? 'pause timer' : 'play timer'}
    >
      {isTimerStart ? <Pause /> : <Icon name='play' color={reds[3]} />}
    </StyledPlayButton>
  );
};

export default PlayButton;
