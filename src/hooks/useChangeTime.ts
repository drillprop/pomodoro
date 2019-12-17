import { useSelector, useDispatch } from 'react-redux';
import { useState, ChangeEvent, FormEvent } from 'react';
import { setTimersDurationStart } from '../duck/timer/timerActions';
import { selectConfigAsObj } from '../duck/timer/timerSelectors';

export default () => {
  const dispatch = useDispatch();

  const initial = useSelector(selectConfigAsObj);

  const [timeleft, setTimeleft] = useState<any>(initial);

  const updateState = (e: ChangeEvent<HTMLInputElement>) => {
    let { name, max, min, value } = e.target;
    e.target.value = '';

    const maxLength = name.includes('min') ? 3 : 2;

    const timeUnitValue: number = parseInt(
      value
        .split('')
        .slice(-maxLength)
        .join('')
    );

    const fazeName: string = name.split('-')[0];
    const timeUnitName: string = name.includes('min') ? 'minutes' : 'seconds';

    const maxInput: number = parseInt(max);
    const minInput: number = parseInt(min);

    if (timeUnitValue <= maxInput && timeUnitValue >= minInput) {
      setTimeleft({
        ...timeleft,
        [fazeName]: { ...timeleft[fazeName], [timeUnitName]: timeUnitValue }
      });
    } else if (timeUnitValue > maxInput) {
      setTimeleft({
        ...timeleft,
        [fazeName]: { ...timeleft[fazeName], [timeUnitName]: maxInput }
      });
    } else {
      setTimeleft({
        ...timeleft,
        [fazeName]: { ...timeleft[fazeName], [timeUnitName]: minInput }
      });
    }
  };

  const submitState = (e: FormEvent) => {
    e.preventDefault();
    const fazeNames: Array<string> = Object.keys(initial);
    const newState = fazeNames.reduce((acc: any, item: any) => {
      acc[item] = timeleft[item].seconds + timeleft[item].minutes * 60;
      return acc;
    }, {});
    dispatch(setTimersDurationStart(newState));
  };

  return [timeleft, updateState, submitState];
};
