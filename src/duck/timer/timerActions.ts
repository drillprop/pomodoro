import {
  PauseTimerAction,
  ResetTimerAction,
  SetTimersDurationFailureAction,
  SetTimersDurationStartAction,
  SetTimersDurationSuccessAction,
  SkipBreakAction,
  StartTimerAction,
  StartTimerParams,
  StopTimerAndSwitchFazeAction,
  TimeleftsParams,
  TimerError
} from './timerInterfaces';
import {
  PAUSE_TIMER,
  RESET_TIMER,
  SET_TIMERS_DURATION_FAILURE,
  SET_TIMERS_DURATION_START,
  SET_TIMERS_DURATION_SUCCES,
  SKIP_BREAK,
  START_TIMER,
  STOP_AND_SWITCH_FAZE
} from './timerTypes';

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
