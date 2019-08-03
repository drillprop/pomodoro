import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTimers } from '../duck/timer/timerActions';
import { convertSecToObj } from '../utils/helpers';

const useInput = (name: string) => {
  const dispatch = useDispatch();

  const secs = useSelector((state: any) => state.config[`${name}Init`]);

  const timeObject: any = convertSecToObj(secs);
  timeObject.minutes = timeObject.minutes + timeObject.hours * 60;

  const [state, setState] = useState(timeObject);

  const updateState = (e: any) => {
    let { name, max, min, value } = e.target;

    e.target.value = '';
    const maxLength = name === 'minutes' ? 3 : 2;

    const spliced = parseInt(
      value
        .split('')
        .slice(-maxLength)
        .join('')
    );

    if (spliced <= max && spliced >= min) {
      setState({ ...state, [name]: spliced });
    } else if (spliced > max) {
      setState({ ...state, [name]: parseInt(max) });
    } else {
      setState({ ...state, [name]: parseInt(min) });
    }
  };

  const submitState = (e: any) => {
    const { name } = e.target;
    const seconds = state.minutes * 60 + state.seconds;

    e.preventDefault();

    dispatch(setTimers(seconds, name));
  };

  return [updateState, submitState, state];
};

export default useInput;
