import React, { useRef } from 'react';
import TomatoIcon from '../../../components/TomatoIcon/TomatoIcon';
import { TomatoWrapper } from './Tomato.styles';
import { useSelector } from 'react-redux';
import { selectTimeleft } from '../../../duck/timer/timerSelectors';

interface Props {
  count: number;
}

const Tomato: React.FC<Props> = ({ count }) => {
  const timeleft = useSelector(selectTimeleft);
  const progress = Math.abs((count / timeleft) * 100 - 100);
  return (
    <TomatoWrapper>
      <TomatoIcon size='270px' fill='silver' />
      <TomatoIcon size='270px' fill='grey' coverage={progress} />
    </TomatoWrapper>
  );
};

export default Tomato;
