import dayjs from 'dayjs';

export const convertTimeToObj = (seconds: number): any => {
  const timerDurationSeconds = seconds % 60;
  const timerDurationMinutes = Math.floor((seconds % (60 * 60)) / 60);
  const timerDurationHours = Math.floor((seconds % (60 * 360)) / 60 / 60);
  return {
    hours: timerDurationHours,
    minutes: timerDurationMinutes,
    seconds: timerDurationSeconds,
  };
};

export const convertTimeToStr = (seconds: number): string => {
  const timerDurationSeconds = convertTimeToObj(seconds)
    .seconds.toString()
    .padStart(2, '0');

  const timerDurationMinutes = convertTimeToObj(seconds)
    .minutes.toString()
    .padStart(2, '0');

  const timerDurationHours = convertTimeToObj(seconds)
    .hours.toString()
    .padStart(2, '0');

  if (seconds < 60 * 60)
    return `${timerDurationMinutes}:${timerDurationSeconds}`;
  else
    return `${timerDurationHours}:${timerDurationMinutes}:${timerDurationSeconds}`;
};

interface FazeTimes {
  breakTime: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  intervalTime: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

interface FazeTimesSeconds {
  breakTime: number;
  intervalTime: number;
}

export const convertFazeTimesToSeconds = (fazeTimes: FazeTimes) => {
  const fazeNames: Array<any> = Object.keys(fazeTimes);
  return fazeNames.reduce((acc: FazeTimesSeconds, item: keyof FazeTimes) => {
    acc[item] = fazeTimes[item].seconds + fazeTimes[item].minutes * 60;
    return acc;
  }, {});
};

export const countTimeLeft = (now: number, future: number): number => {
  const dayJsNow = dayjs(now);
  const dayJsFuture = dayjs(future);

  const difference = dayJsFuture.diff(dayJsNow, 'second');

  return difference < 0 ? 0 : difference;
};

export const renameProperty = (oldProp: string, newProp: string, obj: any) => {
  // convert obj to array to keep order of properties in tasks
  const objEntries = Object.entries(obj);

  const arrWithChangedProp = objEntries.map((arr) => {
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
