import { CREATE_TASK, EDIT_TASK, DELETE_TASK } from './tasksTypes';
import { renameProperty } from '../../utils/helpers';

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
      const newTasksObj = renameProperty(prevTask, newTask, state.tasks);
      return {
        ...state,
        tasks: { ...newTasksObj }
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
