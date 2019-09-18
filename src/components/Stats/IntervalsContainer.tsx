import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchIntervalsByDay } from '../../duck/stats/statsActions';
import IntervalsToday from './IntervalsToday';
import React from 'react';
import { createDaysArray } from '../../utils/helpers';

const IntervalsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIntervalsByDay());
  }, []);

  const stats: any = (daysBackwards: number) =>
    useSelector(({ stats }: any) => {
      const lastdays = createDaysArray(daysBackwards).map(day => ({
        date: day,
        intervals: 0
      }));

      if (stats.intervalsByDay) {
        const intervals = stats.intervalsByDay;
        const intKeys = Object.keys(intervals);
        intKeys.forEach(key => {
          let index = lastdays.findIndex(day => day.date === key);
          let sumAllInervals: any = Object.values(intervals[key]).reduce(
            (acc: any, item: any): number => acc + item,
            0
          );
          lastdays[index] = {
            date: key,
            intervals: sumAllInervals
          };
        });
      }
      return lastdays;
    });

  return (
    <>
      <IntervalsToday stats={stats} />
    </>
  );
};

export default IntervalsContainer;
