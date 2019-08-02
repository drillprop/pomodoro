import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTimers } from '../duck/timer/timerActions';

const useInput = (initial: any) => {
  const [state, setState] = useState(initial);
  const dispatch = useDispatch();

  const updateState = (e: any) => {
    const { name, max, min, value } = e.target;

    const spliced = parseInt(
      value
        .split('')
        .splice(value.length - 2, 2)
        .join('')
    );

    if (spliced < max && spliced > min) {
      setState({ ...state, [name]: spliced });
    } else if (spliced > max) {
      setState({ ...state, [name]: parseInt(max) });
    } else {
      setState({ ...state, [name]: parseInt(min) });
    }
  };

  const submitState = (e: any) => {
    const { name } = e.target;
    e.preventDefault();

    const seconds = state.hours * 60 * 60 + state.minutes * 60 + state.seconds;
    const capitalizeFirst = name.charAt(0).toUpperCase() + name.slice(1);
    dispatch(setTimers(seconds, `initial${capitalizeFirst}`));
  };

  return [updateState, submitState, state];
};

export default useInput;
