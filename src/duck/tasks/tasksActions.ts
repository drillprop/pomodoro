import { CREATE_TASK, EDIT_TASK, DELETE_TASK } from './tasksTypes';

export const createTask = (taskName: string) => {
  return {
    type: CREATE_TASK,
    taskName
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
