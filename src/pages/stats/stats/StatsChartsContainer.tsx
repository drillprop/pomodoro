import React, { FC, useEffect } from 'react';
import { SubTitle } from '../../../elements/Titles';
import StatsChart from './stats-charts-container/StatsChart';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxState } from '../../../duck/store';
import { createDaysObject } from '../../../utils/helpers';
import { fetchStatsStart } from '../../../duck/stats/statsActions';

const StatsChartContainer: FC = () => {
  const dispatch = useDispatch();
  const stats = useSelector(({ stats }: ReduxState) => stats.statsByDay);

  useEffect(() => {
    dispatch(fetchStatsStart());
  }, [fetchStatsStart]);

  const timeStats: any = (
    daysBackwards: number
  ): {
    dates: Array<string>;
    values: Array<number>;
  } => {
    const dates = createDaysObject(daysBackwards);
    const statsWithBlankDates = { ...dates, ...stats };
    return {
      dates: Object.keys(statsWithBlankDates),
      values: Object.values(statsWithBlankDates).map((value: any) =>
        value ? Math.floor((value.time % 3600) / 60) : 0
      )
    };
  };

  const intervalStats: any = (daysBackwards: number) => {
    const dates = createDaysObject(daysBackwards);
    const statsWithBlankDates = { ...dates, ...stats };
    console.log(statsWithBlankDates);
    const values = Object.values(statsWithBlankDates).map((item: any) => {
      if (item) {
        return Object.values(item.tasks).reduce(
          (acc: any, it: any) => (acc += it),
          0
        );
      }
      return;
    });
    return {
      dates: Object.keys(statsWithBlankDates),
      values
    };
  };

  const timeChartProps = timeStats(30);
  const intervalChartProps = intervalStats(30);

  return (
    <>
      <SubTitle>intervals</SubTitle>
      <StatsChart
        dates={intervalChartProps.dates}
        statsValues={intervalChartProps.values}
      />
      <SubTitle>time</SubTitle>
      <StatsChart
        dates={timeChartProps.dates}
        statsValues={timeChartProps.values}
      />
    </>
  );
};

export default StatsChartContainer;
