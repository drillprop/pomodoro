import React from 'react';
import { useSelector } from 'react-redux';
import { animated, useSpring } from 'react-spring';
import {
  selectIsTimerStart,
  selectTimeleft,
} from '../../duck/timer/timerSelectors';
import useTimer from '../../hooks/useTimer';
import { reds } from '../../utils/colors';

const ProgressBar = () => {
  const timeleft = useSelector(selectTimeleft);
  const isTimerStart = useSelector(selectIsTimerStart);
  const count = useTimer();
  const progress = Math.abs(((count - 1) / (timeleft - 1)) * 100 - 100);

  const props = useSpring({
    number: progress + '%',
    config: isTimerStart
      ? {
          duration: 1000,
        }
      : {},
  });

  return (
    <svg width='100%' height='20'>
      <animated.line
        x1='0%'
        x2={props.number}
        y1='0%'
        y2='0%'
        stroke={reds[0]}
        strokeWidth='10'
      />
    </svg>
  );
};

export default ProgressBar;
