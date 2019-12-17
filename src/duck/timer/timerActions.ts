import {
  RESET_TIMER,
  SHOW_MENU,
  START_TIMER,
  PAUSE_TIMER,
  STOP_AND_SWITCH_FAZE,
  SKIP_BREAK,
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

// export const fetchConfigStart = (): FetchConfigStartAction => ({
//   type: FETCH_CONFIG_START
// });

// export const fetchConfigSuccess = (
//   config: TimeleftsParams
// ): FetchConfigSuccessAction => ({
//   type: FETCH_CONFIG_SUCCESS,
//   payload: config
// });

// export const fetchConfigFailure = (
//   error: TimerError
// ): FetchConfigFailureAction => ({
//   type: FETCH_CONFIG_FAILURE,
//   payload: error
// });
