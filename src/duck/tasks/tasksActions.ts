import {
  CREATE_TASK,
  EDIT_TASK,
  DELETE_TASK,
  SWITCH_TASK
} from '../reduxTypes';
import { saveTasksInFirestore } from '../../utils/firebase/firestore';

export const createTask = (taskName: string, user: any) => {
  return async (dispatch: any) => {
    await saveTasksInFirestore(user, taskName);
    dispatch({
      type: CREATE_TASK,
      taskName
    });
  };
};

export const editTask = (prevTask: string, newTask: string) => {
  return {
    type: EDIT_TASK,
    prevTask,
    newTask
  };
};

export const deleteTask = (taskName: string) => {
  return {
    type: DELETE_TASK,
    taskName
  };
};

export const switchTask = (taskName: string) => {
  return {
    type: SWITCH_TASK,
    taskName
  };
};
