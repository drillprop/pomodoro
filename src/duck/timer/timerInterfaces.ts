import {
  PAUSE_TIMER,
  RESET_TIMER,
  SKIP_BREAK,
  STOP_AND_SWITCH_FAZE,
  SET_TIMERS_DURATION_START,
  SET_TIMERS_DURATION_SUCCES,
  SET_TIMERS_DURATION_FAILURE,
  SHOW_MENU,
  START_TIMER
} from './timerTypes';
import { SwitchTaskSuccessAction } from '../tasks/tasksInterfaces';
import {
  LoginSuccessAction,
  SignOutSuccessAction
} from '../users/userInterfaces';

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
  code: string | null;
  message: string | null;
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
  | SwitchTaskSuccessAction
  | LoginSuccessAction
  | SignOutSuccessAction;
