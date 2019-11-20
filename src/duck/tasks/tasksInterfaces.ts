import {
  CREATE_TASK_START,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,
  EDIT_TASK_START,
  EDIT_TASK_SUCCESS,
  EDIT_TASK_FAILURE,
  DELETE_TASK_START,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
  SWITCH_TASK_START,
  SWITCH_TASK_SUCCESS,
  SWITCH_TASK_FAILURE
} from './taskTypes';
import {
  LoginSuccessAction,
  SignOutSuccessAction
} from '../users/userInterfaces';
import {
  SkipBreakAction,
  StopTimerAndSwitchFazeAction
} from '../timer/timerInterfaces';

export interface TaskError {
  code: string;
  message: string;
}

export interface EditTaskParams {
  prevTask: string;
  newTask: string;
}
// TASK ACTIONS INTERFACES

export interface CreateTaskStartAction {
  type: typeof CREATE_TASK_START;
  payload: string;
}

export interface CreateTaskSuccessAction {
  type: typeof CREATE_TASK_SUCCESS;
  payload: string;
}

export interface CreateTaskFailureAction {
  type: typeof CREATE_TASK_FAILURE;
  payload: TaskError;
}

export interface EditTaskStartAction {
  type: typeof EDIT_TASK_START;
  payload: EditTaskParams;
}

export interface EditTaskSuccessAction {
  type: typeof EDIT_TASK_SUCCESS;
  payload: EditTaskParams;
}

export interface EditTaskFailureAction {
  type: typeof EDIT_TASK_FAILURE;
  payload: TaskError;
}

export interface DeleteTaskStartAction {
  type: typeof DELETE_TASK_START;
  payload: string;
}

export interface DeleteTaskSuccessAction {
  type: typeof DELETE_TASK_SUCCESS;
  payload: string;
}

export interface DeleteTaskFailureAction {
  type: typeof DELETE_TASK_FAILURE;
  payload: TaskError;
}

export interface SwitchTaskStartAction {
  type: typeof SWITCH_TASK_START;
  payload: string;
}

export interface SwitchTaskSuccessAction {
  type: typeof SWITCH_TASK_SUCCESS;
  payload: string;
}
export interface SwitchTaskFailureAction {
  type: typeof SWITCH_TASK_FAILURE;
  payload: TaskError;
}

export type TasksActionTypes =
  | CreateTaskStartAction
  | CreateTaskSuccessAction
  | CreateTaskFailureAction
  | EditTaskStartAction
  | EditTaskSuccessAction
  | EditTaskFailureAction
  | DeleteTaskStartAction
  | DeleteTaskSuccessAction
  | DeleteTaskFailureAction
  | SwitchTaskStartAction
  | SwitchTaskSuccessAction
  | SwitchTaskFailureAction
  | LoginSuccessAction
  | SignOutSuccessAction
  | StopTimerAndSwitchFazeAction;
