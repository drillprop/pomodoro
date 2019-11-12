import dayjs from 'dayjs';

export const convertSecToObj = (seconds: number): any => {
  const timerDurationSeconds = seconds % 60;
  const timerDurationMinutes = Math.floor((seconds % (60 * 60)) / 60);
  const timerDurationHours = Math.floor((seconds % (60 * 360)) / 60 / 60);
  return {
    hours: timerDurationHours,
    minutes: timerDurationMinutes,
    seconds: timerDurationSeconds
  };
};

export const convertSecToStr = (seconds: number): string => {
  const timerDurationSeconds = convertSecToObj(seconds)
    .seconds.toString()
    .padStart(2, '0');

  const timerDurationMinutes = convertSecToObj(seconds)
    .minutes.toString()
    .padStart(2, '0');

  const timerDurationHours = convertSecToObj(seconds)
    .hours.toString()
    .padStart(2, '0');

  if (seconds < 60 * 60)
    return `${timerDurationMinutes}:${timerDurationSeconds}`;
  else
    return `${timerDurationHours}:${timerDurationMinutes}:${timerDurationSeconds}`;
};

export const countTimeLeft = (now: number, future: number): number => {
  const dayJsNow = dayjs(now);
  const dayJsFuture = dayjs(future);

  const difference = dayJsFuture.diff(dayJsNow, 'second');

  return difference;
};

export const renameProperty = (oldProp: string, newProp: string, obj: any) => {
  // convert obj to array to keep order of properties in tasks
  const objEntries = Object.entries(obj);

  const arrWithChangedProp = objEntries.map(arr => {
    if (arr.includes(oldProp)) {
      arr[0] = newProp;
    }
    return arr;
  });

  return Object.fromEntries(arrWithChangedProp);
};

export const getToday = () => {
  return dayjs().format('DD-MM-YY');
};

export const getStorageUser = () => {
  const user = localStorage.getItem('usr');
  if (user) return JSON.parse(user);
  return null;
};

export const createDaysArray = (daysBackward: number) => {
  const arr = [];
  for (let i = daysBackward; i >= 0; i--) {
    arr.push(
      dayjs()
        .subtract(i, 'day')
        .format('DD-MM-YY')
    );
  }
  return arr;
};
