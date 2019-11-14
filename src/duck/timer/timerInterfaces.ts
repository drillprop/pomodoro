import {
  PAUSE_TIMER,
  RESET_TIMER,
  SKIP_BREAK,
  STOP_AND_SWITCH_FAZE,
  SET_TIMERS_DURATION_START,
  SET_TIMERS_DURATION_SUCCES,
  SET_TIMERS_DURATION_FAILURE,
  FETCH_INITIAL_STATE_START,
  FETCH_INITIAL_STATE_SUCCES,
  FETCH_INITIAL_STATE_FAILURE,
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

export interface FetchInitialStateStartAction {
  type: typeof FETCH_INITIAL_STATE_START;
}

export interface FetchInitialStateSuccesAction {
  type: typeof FETCH_INITIAL_STATE_SUCCES;
  payload: string;
  // initial;
}

export interface FetchInitialStateFailureAction {
  type: typeof FETCH_INITIAL_STATE_FAILURE;
  payload: string;
  // errorMessage;
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
  | FetchInitialStateStartAction
  | FetchInitialStateSuccesAction
  | FetchInitialStateFailureAction
  | SwitchTaskSuccessAction;
