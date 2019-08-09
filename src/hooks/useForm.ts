import { useSelector } from 'react-redux';
import { convertSecToObj } from '../utils/helpers';
import { useState } from 'react';

export default () => {
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
  return [timeleft, updateState];
};
