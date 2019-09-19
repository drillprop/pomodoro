import {
  DELETE_TASK,
  SWITCH_TASK,
  CREATE_TASK_START,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,
  EDIT_TASK_START,
  EDIT_TASK_SUCCESS,
  EDIT_TASK_FAILURE
} from './taskTypes';
import { deleteTaskFromFirestore, saveSelectedTask } from './tasksUtils';

export const createTaskStart = (taskName: string) => ({
  type: CREATE_TASK_START,
  taskName
});

export const createTaskSuccess = (taskName: string) => ({
  type: CREATE_TASK_SUCCESS,
  taskName
});

export const createTaskFailure = (error: any) => ({
  type: CREATE_TASK_FAILURE,
  error
});

export const editTaskStart = (prevTask: string, newTask: string) => ({
  type: EDIT_TASK_START,
  prevTask,
  newTask
});

export const editTaskSuccess = (prevTask: string, newTask: string) => ({
  type: EDIT_TASK_SUCCESS,
  prevTask,
  newTask
});

export const editTaskFailure = (error: any) => ({
  type: EDIT_TASK_FAILURE,
  error
});

export const deleteTask = (taskName: string) => {
  return async (dispatch: any) => {
    try {
      dispatch({
        type: DELETE_TASK,
        taskName
      });
      await deleteTaskFromFirestore(taskName);
    } catch (err) {
      console.error(err);
    }
  };
};

export const switchTask = (taskName: string) => {
  return async (dispatch: any) => {
    try {
      dispatch({ type: SWITCH_TASK, taskName });
      await saveSelectedTask(taskName);
    } catch (err) {
      console.error(err);
    }
  };
};
