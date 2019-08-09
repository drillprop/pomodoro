import { useSelector, useDispatch } from 'react-redux';
import { convertSecToObj } from '../utils/helpers';
import { useState } from 'react';
import { setTimers } from '../duck/timer/timerActions';

export default () => {
  const dispatch = useDispatch();

  const initialSeconds = useSelector(
    (state: any) => state.config.initialTimeleft
  );

  const secondsEntries = Object.entries(initialSeconds);

  const reducedToObj = secondsEntries.reduce((acc: any, item: any) => {
    return {
      ...acc,
      [item[0]]: convertSecToObj(item[1])
    };
  }, {});

  const [timeleft, setTimeleft] = useState(reducedToObj);

  const updateState = (e: any) => {
    let { name, max, min, value } = e.target;

    e.target.value = '';
    const maxLength = name.includes('min') ? 3 : 2;

    const spliced = parseInt(
      value
        .split('')
        .slice(-maxLength)
        .join('')
    );
    const faze = name.split('-')[0];
    const propertyName = name.includes('min') ? 'minutes' : 'seconds';

    if (spliced <= max && spliced >= min) {
      setTimeleft({
        ...timeleft,
        [faze]: { ...timeleft[faze], [propertyName]: spliced }
      });
    } else if (spliced > max) {
      setTimeleft({
        ...timeleft,
        [faze]: { ...timeleft[faze], [propertyName]: parseInt(max) }
      });
    } else {
      setTimeleft({
        ...timeleft,
        [faze]: { ...timeleft[faze], [propertyName]: parseInt(min) }
      });
    }
  };

  const submitState = (e: any) => {
    e.preventDefault();

    const secondsKeys = Object.keys(initialSeconds);

    secondsKeys.forEach((key: string) => {
      let smth = timeleft[key].seconds + timeleft[key].minutes * 60;
      dispatch(setTimers(smth, key));
    });
  };

  return [timeleft, updateState, submitState];
};
