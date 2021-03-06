import React from 'react';
import { useSelector } from 'react-redux';
import { useSpring } from 'react-spring';
import TomatoIcon from '../../../components/TomatoIcon/TomatoIcon';
import {
  selectTimeleft,
  selectIsTimerStart,
} from '../../../duck/timer/timerSelectors';
import { reds } from '../../../utils/colors';
import { TomatoWrapper } from './Tomato.styles';

interface Props {
  count: number;
}

const Tomato: React.FC<Props> = ({ count }) => {
  const timeleft = useSelector(selectTimeleft);
  const isTimerStart = useSelector(selectIsTimerStart);
  const progress = Math.abs((count / timeleft) * 100 - 100) / 2;

  const props = useSpring({ number: isTimerStart ? progress : 50 });
  return (
    <TomatoWrapper>
      <TomatoIcon size='270px' fill={reds[4]} />
      <TomatoIcon size='270px' fill={reds[3]} coverage={props.number} />
    </TomatoWrapper>
  );
};

export default Tomato;
