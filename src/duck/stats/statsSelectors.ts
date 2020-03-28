import { createSelector } from 'reselect';
import { ReduxState } from '../store';
import { createDaysObject } from './statsUtils';

export const selectStats = ({ stats }: ReduxState) => stats;

export const selectStatsByDay = createSelector(
  [selectStats],
  ({ statsByDay }) => statsByDay
);

export const selectIsStatsFetching = createSelector(
  [selectStats],
  ({ isFetching }) => isFetching
);

export const selectStatsError = createSelector(
  [selectStats],
  ({ error }) => error
);

export const selectTimeStats = (days: number) =>
  createSelector([selectStatsByDay], (stats: any) => {
    const dates = createDaysObject(days, stats);

    return {
      dates: Object.keys(dates),
      values: Object.values(dates).map((value: any) =>
        value ? Math.floor(value.time / 60) : 0
      )
    };
  });

export const selectIntervalStats = (days: number) =>
  createSelector([selectStatsByDay], (stats: any) => {
    const dates = createDaysObject(days, stats);

    const values = Object.values(dates).map((item: any) => {
      if (item) {
        return Object.values(item.tasks).reduce(
          (acc: any, it: any) => (acc += it),
          0
        );
      } else {
        return 0;
      }
    });
    return {
      dates: Object.keys(dates),
      values
    };
  });
