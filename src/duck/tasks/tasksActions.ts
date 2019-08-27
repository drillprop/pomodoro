import {
  CREATE_TASK,
  EDIT_TASK,
  DELETE_TASK,
  SWITCH_TASK,
  FETCH_TASKS
} from '../reduxTypes';
import {
  saveTasksInFirestore,
  firestoreData,
  deleteTaskFromFirestore
} from '../../utils/firebase/firestore';

export const fetchTasks = (user: any) => {
  return async (dispatch: any) => {
    const data = await firestoreData(user);
    const tasks = data ? data.tasks : { default: 0 };
    dispatch({
      type: FETCH_TASKS,
      tasks
    });
  };
};

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

export const deleteTask = (usr: any, taskName: string) => {
  return async (dispatch: any) => {
    await deleteTaskFromFirestore(usr, taskName);
    dispatch({
      type: DELETE_TASK,
      taskName
    });
  };
};

export const switchTask = (taskName: string) => {
  return {
    type: SWITCH_TASK,
    taskName
  };
};
