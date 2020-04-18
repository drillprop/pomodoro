import React, { useRef } from 'react';
import TomatoIcon from '../../../components/TomatoIcon/TomatoIcon';
import { animated, useSpring, config } from 'react-spring';
import { TomatoWrapper } from './Tomato.styles';
import { useSelector } from 'react-redux';
import { selectTimeleft } from '../../../duck/timer/timerSelectors';

interface Props {
  count: number;
}

const Tomato: React.FC<Props> = ({ count }) => {
  const timeleft = useSelector(selectTimeleft);
  const progress = Math.abs((count / timeleft) * 100 - 100) / 2;

  const props = useSpring({ number: progress });
  return (
    <TomatoWrapper>
      <TomatoIcon size='280px' fill='silver' />
      <TomatoIcon size='280px' fill='grey' coverage={props.number} />
    </TomatoWrapper>
  );
};

export default Tomato;
