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
  SET_TIMERS_DURATION_START,
  SET_TIMERS_DURATION_SUCCES,
  SET_TIMERS_DURATION_FAILURE
} from './timerTypes';
import {
  StartTimerParams,
  StartTimerAction,
  PauseTimerAction,
  ResetTimerAction,
  SkipBreakAction,
  StopTimerAndSwitchFazeAction,
  ShowMenuAction,
  TimeleftsParams,
  SetTimersDurationStartAction,
  SetTimersDurationSuccessAction,
  TimerError,
  SetTimersDurationFailureAction
} from './timerInterfaces';

export const startTimer = (
  startTimerParams: StartTimerParams
): StartTimerAction => ({
  type: START_TIMER,
  payload: startTimerParams
});

export const pauseTimer = (pauseTime: number): PauseTimerAction => ({
  type: PAUSE_TIMER,
  payload: pauseTime
});

export const resetTimer = (): ResetTimerAction => ({
  type: RESET_TIMER
});

export const skipBreak = (): SkipBreakAction => ({
  type: SKIP_BREAK
});

export const stopTimerAndSwitchFaze = (
  isInterval: boolean
): StopTimerAndSwitchFazeAction => ({
  type: STOP_AND_SWITCH_FAZE,
  payload: isInterval
});

export const showMenu = (isMenuVisible: boolean): ShowMenuAction => {
  return {
    type: SHOW_MENU,
    payload: isMenuVisible
  };
};

export const setTimersDurationStart = (
  timelefts: TimeleftsParams
): SetTimersDurationStartAction => ({
  type: SET_TIMERS_DURATION_START,
  payload: timelefts
});

export const setTimersDurationSuccess = (
  timelefts: TimeleftsParams
): SetTimersDurationSuccessAction => ({
  type: SET_TIMERS_DURATION_SUCCES,
  payload: timelefts
});

export const setTimersDurationFailure = (
  error: TimerError
): SetTimersDurationFailureAction => ({
  type: SET_TIMERS_DURATION_FAILURE,
  payload: error
});

// Should its be user actions?
// userconfig?

// export const fetchInitialStateStart = () => ({
//   type: FETCH_INITIAL_STATE_START
// });

// export const fetchInitialStateSucces = (initial: any) => ({
//   type: FETCH_INITIAL_STATE_SUCCES,
//   initial
// });

// export const fetchInitialStateFailure = (errorMessage: string) => ({
//   type: FETCH_INITIAL_STATE_FAILURE,
//   errorMessage
// });
