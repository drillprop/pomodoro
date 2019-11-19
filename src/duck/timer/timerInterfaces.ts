import {
  PAUSE_TIMER,
  RESET_TIMER,
  SKIP_BREAK,
  STOP_AND_SWITCH_FAZE,
  SET_TIMERS_DURATION_START,
  SET_TIMERS_DURATION_SUCCES,
  SET_TIMERS_DURATION_FAILURE,
  FETCH_CONFIG_START,
  FETCH_CONFIG_SUCCESS,
  FETCH_CONFIG_FAILURE,
  SHOW_MENU,
  START_TIMER
} from './timerTypes';
import { SwitchTaskSuccessAction } from '../tasks/tasksInterfaces';

export interface StartTimerParams {
  startTime: number;
  timeleft: number;
  selectedTask: string;
  isInterval: boolean;
}

export interface TimeleftsParams {
  intervalTime: number;
  breakTime: number;
}
export interface TimerError {
  code: string;
  message: string;
}

// TIMER ACTIONS INTERFACES

export interface StartTimerAction {
  type: typeof START_TIMER;
  payload: StartTimerParams;
}

export interface PauseTimerAction {
  type: typeof PAUSE_TIMER;
  payload: number;
}

export interface ResetTimerAction {
  type: typeof RESET_TIMER;
}

export interface SkipBreakAction {
  type: typeof SKIP_BREAK;
}

export interface StopTimerAndSwitchFazeAction {
  type: typeof STOP_AND_SWITCH_FAZE;
  payload: boolean;
}

export interface ShowMenuAction {
  type: typeof SHOW_MENU;
  payload: boolean;
}

export interface SetTimersDurationStartAction {
  type: typeof SET_TIMERS_DURATION_START;
  payload: TimeleftsParams;
}

export interface SetTimersDurationSuccessAction {
  type: typeof SET_TIMERS_DURATION_SUCCES;
  payload: TimeleftsParams;
}

export interface SetTimersDurationFailureAction {
  type: typeof SET_TIMERS_DURATION_FAILURE;
  payload: TimerError;
}

// Should i move these ones to user?

export interface FetchConfigStartAction {
  type: typeof FETCH_CONFIG_START;
}

export interface FetchConfigSuccessAction {
  type: typeof FETCH_CONFIG_SUCCESS;
  payload: TimeleftsParams;
}

export interface FetchConfigFailureAction {
  type: typeof FETCH_CONFIG_FAILURE;
  payload: TimerError;
}

export type TimerActionTypes =
  | StartTimerAction
  | PauseTimerAction
  | ResetTimerAction
  | SkipBreakAction
  | StopTimerAndSwitchFazeAction
  | ShowMenuAction
  | SetTimersDurationStartAction
  | SetTimersDurationSuccessAction
  | SetTimersDurationFailureAction
  | FetchConfigStartAction
  | FetchConfigSuccessAction
  | FetchConfigFailureAction
  | SwitchTaskSuccessAction;
