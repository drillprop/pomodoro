import { createSelector } from 'reselect';
import { ReduxState } from '../store';
import { convertTimeToObj } from '../../utils/helpers';

export const selectTimer = ({ timer }: ReduxState) => timer;

export const selectConfig = createSelector(
  [selectTimer],
  ({ config }) => config
);

export const selectIsTimerStart = createSelector(
  [selectTimer],
  ({ isTimerStart }) => isTimerStart
);

export const selectIsInterval = createSelector(
  [selectTimer],
  ({ isInterval }) => isInterval
);

export const selectEndTime = createSelector(
  [selectTimer],
  ({ endTime }) => endTime
);

export const selectTimeleft = createSelector(
  [selectTimer],
  ({ timeleft }) => timeleft
);

export const selectIsFetching = createSelector(
  [selectTimer],
  ({ isFetching }) => isFetching
);

export const selectConfigAsObj = createSelector([selectTimer], ({ config }) => {
  return {
    breakTime: convertTimeToObj(config.breakTime),
    intervalTime: convertTimeToObj(config.intervalTime)
  };
});

export const selectError = createSelector([selectTimer], ({ error }) => error);
