import {
  FETCH_INTERVALS_BY_DAY_FAILURE,
  FETCH_INTERVALS_BY_DAY_START,
  FETCH_INTERVALS_BY_DAY_SUCCESS
} from './statsTypes';

export const fetchIntervalsByDayStart = () => {
  return (dispatch: any) => ({
    type: FETCH_INTERVALS_BY_DAY_START
  });
};

export const fetchIntervalsByDaySucces = () => {
  return (dispatch: any) => ({
    type: FETCH_INTERVALS_BY_DAY_START
  });
};
export const fetchIntervalsByDayFailure = () => {
  return (dispatch: any) => ({
    type: FETCH_INTERVALS_BY_DAY_FAILURE
  });
};
