import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsInterval } from '../../../duck/timer/timerSelectors';
import Heading from '../../../components/Heading/Heading';
import { useTransition, animated } from 'react-spring';

const TimerFaze: React.FC = () => {
  const isInterval = useSelector(selectIsInterval);
  const transition = useTransition(isInterval, null, {
    from: {
      transform: 'translate3d(0, 100%, 0) rotateX(-90deg)',
      opacity: 0,
    },
    enter: { transform: 'translate3d(0,0px,0) rotateX(0)', opacity: 1 },
    leave: {
      transform: 'translate3d(0, 100%, 0) rotateX(90deg)',
      opacity: 0,
      height: 0,
    },
  });

  return (
    <>
      {transition.map(({ item, key, props }) => {
        return item ? (
          <animated.div style={props} key={key}>
            <Heading level='h1'>{isInterval ? 'interval' : 'break'}</Heading>
          </animated.div>
        ) : (
          <animated.div style={props} key={key}>
            <Heading level='h1'>{isInterval ? 'interval' : 'break'}</Heading>
          </animated.div>
        );
      })}
    </>
  );
};

export default TimerFaze;
