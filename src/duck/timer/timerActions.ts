import {
  RESET_TIMER,
  SHOW_MENU,
  START_TIMER,
  PAUSE_TIMER,
  STOP_AND_SWITCH_FAZE,
  SKIP_BREAK,
  FETCH_INITIAL_STATE_START,
  FETCH_INITIAL_STATE_SUCCES,
  FETCH_INITIAL_STATE_FAILURE,
  SET_TIMERS_START,
  SET_TIMERS_SUCCES,
  SET_TIMERS_FAILURE
} from './timerTypes';

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

export const setTimersStart = (timelefts: any) => ({
  type: SET_TIMERS_START,
  timelefts
});

export const setTimersSuccess = (timelefts: any) => ({
  type: SET_TIMERS_SUCCES,
  timelefts
});

export const setTimersFailure = (error: any) => ({
  type: SET_TIMERS_FAILURE,
  error
});

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
