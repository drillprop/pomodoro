import {
  CREATE_TASK,
  EDIT_TASK,
  DELETE_TASK,
  SWITCH_TASK
} from '../reduxTypes';
import {
  saveTasksInFirestore,
  deleteTaskFromFirestore,
  updateTaskInFirestore,
  saveSelectedTask
} from '../../utils/firebase/firestore';

export const createTask = (taskName: string) => {
  return async (dispatch: any) => {
    await saveTasksInFirestore(taskName);
    dispatch({
      type: CREATE_TASK,
      taskName
    });
  };
};

export const editTask = (prevTask: string, newTask: string) => {
  return async (dispatch: any) => {
    await updateTaskInFirestore(prevTask, newTask);
    dispatch({
      type: EDIT_TASK,
      prevTask,
      newTask
    });
  };
};

export const deleteTask = (taskName: string) => {
  return async (dispatch: any) => {
    await deleteTaskFromFirestore(taskName);
    dispatch({
      type: DELETE_TASK,
      taskName
    });
  };
};

export const switchTask = (taskName: string) => {
  return async (dispatch: any) => {
    await saveSelectedTask(taskName);
    dispatch({ type: SWITCH_TASK, taskName });
  };
};
