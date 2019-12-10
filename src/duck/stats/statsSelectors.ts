import { createSelector } from 'reselect';
import { ReduxState } from '../store';
import { createDaysObject } from '../../utils/helpers';

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
  createSelector([selectStatsByDay], stats => {
    const dates = createDaysObject(days);
    const statsWithBlankDates = { ...dates, ...stats };
    return {
      dates: Object.keys(statsWithBlankDates),
      values: Object.values(statsWithBlankDates).map((value: any) =>
        value ? Math.floor((value.time % 3600) / 60) : 0
      )
    };
  });

export const selectIntervalStats = (days: number) =>
  createSelector([selectStatsByDay], stats => {
    const dates = createDaysObject(days);
    const statsWithBlankDates = { ...dates, ...stats };
    const values = Object.values(statsWithBlankDates).map((item: any) => {
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
      dates: Object.keys(statsWithBlankDates),
      values
    };
  });
