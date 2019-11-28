import React from 'react';
import { ProgressBarWrapper, ProgressBarLine } from './ProgressBar.styles';
import useTimer from '../../hooks/useTimer';
import { useSelector } from 'react-redux';
import { selectTimeleft } from '../../duck/timer/timerSelectors';

const ProgressBar = () => {
  const timeleft = useSelector(selectTimeleft);
  const count = useTimer();
  let progress = ((timeleft - count) * (100 / timeleft)) / 100;
  return (
    <ProgressBarWrapper>
      <ProgressBarLine length={progress} />
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
