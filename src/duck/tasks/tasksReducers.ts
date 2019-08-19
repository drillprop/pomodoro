import { CREATE_TASK, EDIT_TASK, DELETE_TASK } from './tasksTypes';

interface Tasks {
  tasks: any;
  selectedTask: string;
}

const initialState: Tasks = {
  tasks: {
    default: 0,
    study: 0,
    work: 0
  },
  selectedTask: 'default'
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.taskName]: 0
        }
      };
    case EDIT_TASK:
      const { prevTask, newTask } = action;

      const newTasksObject = { ...state.tasks };
      if (prevTask !== 'default') delete newTasksObject[prevTask];

      return {
        ...state,
        tasks: { ...newTasksObject, [newTask]: state.tasks[prevTask] }
      };
    case DELETE_TASK: {
      const { taskName } = action;

      const newTasksState = { ...state.tasks };
      if (taskName !== 'default') delete newTasksState[taskName];
      return {
        ...state,
        tasks: newTasksState
      };
    }
    default:
      return state;
  }
};
