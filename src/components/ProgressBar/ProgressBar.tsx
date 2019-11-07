import React from 'react';
import { ProgressBarWrapper, ProgressBarLine } from './ProgressBar.styles';
import useTimer from '../../hooks/useTimer';
import useTimerState from '../../hooks/useTimerState';

const ProgressBar = () => {
  const { timeleft } = useTimerState();
  const count = useTimer();
  let progress = ((timeleft - count) * (100 / timeleft)) / 100;
  return (
    <ProgressBarWrapper>
      <ProgressBarLine length={progress} />
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
