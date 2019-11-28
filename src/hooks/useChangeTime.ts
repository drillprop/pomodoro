import { useSelector, useDispatch } from 'react-redux';
import { convertSecToObj } from '../utils/helpers';
import { useState, ChangeEvent, FormEvent } from 'react';
import { setTimersDurationStart } from '../duck/timer/timerActions';
import { selectConfig } from '../duck/timer/timerSelectors';

export default () => {
  const dispatch = useDispatch();

  const initialSeconds = useSelector(selectConfig);
  const secondsEntries = Object.entries(initialSeconds);

  const reducedToObj = secondsEntries.reduce((acc: any, item: any) => {
    const secondsToObj: any = convertSecToObj(item[1]);

    secondsToObj.minutes = secondsToObj.minutes + secondsToObj.hours * 60;
    delete secondsToObj.hours;

    return {
      ...acc,
      [item[0]]: secondsToObj
    };
  }, {});

  const [timeleft, setTimeleft] = useState(reducedToObj);

  const updateState = (e: ChangeEvent<HTMLInputElement>) => {
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

    const maximum: number = parseInt(max);
    const minimum: number = parseInt(min);

    if (spliced <= maximum && spliced >= minimum) {
      setTimeleft({
        ...timeleft,
        [faze]: { ...timeleft[faze], [propertyName]: spliced }
      });
    } else if (spliced > maximum) {
      setTimeleft({
        ...timeleft,
        [faze]: { ...timeleft[faze], [propertyName]: maximum }
      });
    } else {
      setTimeleft({
        ...timeleft,
        [faze]: { ...timeleft[faze], [propertyName]: minimum }
      });
    }
  };

  const submitState = (e: FormEvent) => {
    e.preventDefault();
    const secondsKeys: Array<string> = Object.keys(initialSeconds);

    const newState = secondsKeys.reduce((acc: any, item: any) => {
      acc[item] = timeleft[item].seconds + timeleft[item].minutes * 60;
      return acc;
    }, {});

    dispatch(setTimersDurationStart(newState));
  };

  return [timeleft, updateState, submitState];
};
