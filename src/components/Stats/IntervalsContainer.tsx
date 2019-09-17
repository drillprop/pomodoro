import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchIntervalsByDay } from '../../duck/stats/statsActions';
import IntervalsToday from './IntervalsToday';
import React from 'react';
import { create30daysArray } from '../../utils/helpers';

const IntervalsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIntervalsByDay());
  }, []);

  const stats: any = useSelector(({ stats }: any) => {
    const last30days = create30daysArray();

    if (stats.intervalsByDay) {
      const intervals = stats.intervalsByDay;
      const intKeys = Object.keys(intervals);
      intKeys.forEach(key => {
        let index = last30days.findIndex(day => day.date === key);
        let sumAllInervals: any = Object.values(intervals[key]).reduce(
          (acc: any, item: any): number => acc + item,
          0
        );
        last30days[index] = {
          date: key,
          intervals: sumAllInervals
        };
      });
    }
    return last30days;
  });

  return (
    <>
      <IntervalsToday stats={stats} />
    </>
  );
};

export default IntervalsContainer;
