import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../../../duck/store';
import { pauseTimer, startTimer } from '../../../../duck/timer/timerActions';
import Icon from '../../../../components/Icon/Icon';
import useTimerState from '../../../../hooks/useTimerState';
import { primary } from '../../../../utils/colors';
import { Pause, StyledPlayButton } from './PlayButton.styles';

const PlayButton: FC = () => {
  const dispatch = useDispatch();
  const { isTimerStart, timeleft, isInterval } = useTimerState();
  const { selectedTask } = useSelector(({ tasks }: ReduxState) => tasks);

  const startPause = () => {
    isTimerStart
      ? dispatch(pauseTimer(Date.now()))
      : dispatch(startTimer(Date.now(), timeleft, selectedTask, isInterval));
  };

  return (
    <StyledPlayButton isTimerStart={isTimerStart} onClick={startPause}>
      {isTimerStart ? <Pause /> : <Icon name='play' color={primary} />}
    </StyledPlayButton>
  );
};

export default PlayButton;
