import {
  EDIT_TASK,
  DELETE_TASK,
  SWITCH_TASK,
  CREATE_TASK_START,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE
} from './taskTypes';
import {
  saveTasksInFirestore,
  deleteTaskFromFirestore,
  updateTaskInFirestore,
  saveSelectedTask
} from './tasksUtils';

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

// export const createTask = (taskName: string) => {
//   return async (dispatch: any) => {
//     try {
//       dispatch({
//         type: CREATE_TASK,
//         taskName
//       });
//       await saveTasksInFirestore(taskName);
//     } catch (err) {
//       console.error(err);
//     }
//   };
// };

export const editTask = (prevTask: string, newTask: string) => {
  return async (dispatch: any) => {
    try {
      dispatch({
        type: EDIT_TASK,
        prevTask,
        newTask
      });
      await updateTaskInFirestore(prevTask, newTask);
    } catch (err) {
      console.error(err);
    }
  };
};

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
