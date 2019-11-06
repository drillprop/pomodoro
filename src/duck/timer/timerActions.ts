import {
  UPDATE_TIMER,
  RESET_TIMER,
  SHOW_MENU,
  SET_TIMERS,
  START_TIMER,
  PAUSE_TIMER,
  STOP_AND_SWITCH_FAZE,
  SKIP_BREAK,
  FETCH_INITIAL_STATE_START,
  FETCH_INITIAL_STATE_SUCCES,
  FETCH_INITIAL_STATE_FAILURE
} from './timerTypes';
import { saveInitialTimelefts, fetchInitialState } from './timerUtils';

export const updateTimer = (seconds: number, isInterval: boolean) => {
  let field = isInterval ? 'intervalTime' : 'breakTime';
  return {
    type: UPDATE_TIMER,
    field,
    [field]: seconds
  };
};

export const startTimer = (
  startTime: number,
  timeleft: number,
  selectedTask: string,
  isInterval: boolean
) => ({
  type: START_TIMER,
  startTime,
  timeleft,
  selectedTask,
  isInterval
});

export const pauseTimer = (pauseTime: number) => ({
  type: PAUSE_TIMER,
  pauseTime
});

export const resetTimer = () => ({
  type: RESET_TIMER
});

export const skipBreak = () => ({
  type: SKIP_BREAK
});

export const stopTimerAndSwitchFaze = (isInterval: boolean) => ({
  type: STOP_AND_SWITCH_FAZE,
  isInterval
});

export const showMenu = (isMenuVisible: boolean) => {
  return {
    type: SHOW_MENU,
    isMenuVisible
  };
};

export const setTimers = (seconds: number, timer: string) => {
  return async (dispatch: any) => {
    const isInterval = timer === 'breakTime' ? false : true;

    await saveInitialTimelefts(isInterval, seconds);

    dispatch({ type: SET_TIMERS, seconds, timer });
  };
};

export const fetchInitialStateStart = () => ({
  type: FETCH_INITIAL_STATE_START
});

export const fetchInitialStateSucces = (initial: any) => ({
  type: FETCH_INITIAL_STATE_SUCCES,
  initial
});

export const fetchInitialStateFailure = (errorMessage: string) => ({
  type: FETCH_INITIAL_STATE_FAILURE,
  errorMessage
});

export const getInitialState = () => {
  return async (dispatch: any) => {
    await dispatch(fetchInitialStateStart());
    try {
      const initial = await fetchInitialState();
      dispatch(fetchInitialStateSucces(initial));
    } catch (error) {
      console.error(error);
      dispatch(fetchInitialStateFailure(error));
    }
  };
};
