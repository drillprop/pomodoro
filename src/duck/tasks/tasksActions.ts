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
  CreateTaskStartAction,
  CreateTaskSuccessAction,
  TaskError,
  CreateTaskFailureAction,
  EditTaskParams,
  EditTaskStartAction,
  EditTaskSuccessAction,
  EditTaskFailureAction,
  DeleteTaskStartAction,
  DeleteTaskSuccessAction,
  DeleteTaskFailureAction,
  SwitchTaskStartAction,
  SwitchTaskSuccessAction,
  SwitchTaskFailureAction
} from './tasksInterfaces';

export const createTaskStart = (taskName: string): CreateTaskStartAction => ({
  type: CREATE_TASK_START,
  payload: taskName
});

export const createTaskSuccess = (
  taskName: string
): CreateTaskSuccessAction => ({
  type: CREATE_TASK_SUCCESS,
  payload: taskName
});

export const createTaskFailure = (
  error: TaskError
): CreateTaskFailureAction => ({
  type: CREATE_TASK_FAILURE,
  payload: error
});

export const editTaskStart = (
  editTaskParams: EditTaskParams
): EditTaskStartAction => ({
  type: EDIT_TASK_START,
  payload: editTaskParams
});

export const editTaskSuccess = (
  editTaskParams: EditTaskParams
): EditTaskSuccessAction => ({
  type: EDIT_TASK_SUCCESS,
  payload: editTaskParams
});

export const editTaskFailure = (error: TaskError): EditTaskFailureAction => ({
  type: EDIT_TASK_FAILURE,
  payload: error
});

export const deleteTaskStart = (taskName: string): DeleteTaskStartAction => ({
  type: DELETE_TASK_START,
  payload: taskName
});

export const deleteTaskSuccess = (
  taskName: string
): DeleteTaskSuccessAction => ({
  type: DELETE_TASK_SUCCESS,
  payload: taskName
});

export const deleteTaskFailure = (
  error: TaskError
): DeleteTaskFailureAction => ({
  type: DELETE_TASK_FAILURE,
  payload: error
});

export const switchTaskStart = (taskName: string): SwitchTaskStartAction => ({
  type: SWITCH_TASK_START,
  payload: taskName
});
export const switchTaskSuccess = (
  taskName: string
): SwitchTaskSuccessAction => ({
  type: SWITCH_TASK_SUCCESS,
  payload: taskName
});

export const switchTaskFailure = (
  error: TaskError
): SwitchTaskFailureAction => ({
  type: SWITCH_TASK_FAILURE,
  payload: error
});
