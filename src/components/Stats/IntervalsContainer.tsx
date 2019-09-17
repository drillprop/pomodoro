import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchIntervalsByDay } from '../../duck/stats/statsActions';
import IntervalsToday from './IntervalsToday';
import React from 'react';
import { getToday } from '../../utils/helpers';

const IntervalsContainer = () => {
  const dispatch = useDispatch();

  const today = getToday();

  useEffect(() => {
    dispatch(fetchIntervalsByDay());
  }, []);

  const intervalsToday: any = useSelector(({ stats }: any) => {
    if (stats.intervalsByDay && stats.intervalsByDay[today]) {
      const values: Array<number> = Object.values(stats.intervalsByDay[today]);
      return values.reduce((acc, item) => acc + item, 0);
    }
    return null;
  });

  const intervalsOverall: any = useSelector(({ stats }: any) => {
    if (stats.intervalsByDay) {
      const values: Array<any> = Object.entries(stats.intervalsByDay);
      return values.reduce((acc, day) => {
        const dayOverall: Array<number> = Object.values(day[1]);
        acc = acc + dayOverall.reduce((acc, item) => acc + item, 0);
        return acc;
      }, 0);
    }
    return null;
  });

  return (
    <>
      <IntervalsToday
        intervalsToday={intervalsToday}
        intervalsOverall={intervalsOverall}
      />
    </>
  );
};

export default IntervalsContainer;
