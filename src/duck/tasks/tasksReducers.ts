import {
  CREATE_TASK,
  EDIT_TASK,
  DELETE_TASK,
  SWITCH_TASK,
  SWITCH_FAZE
} from '../reduxTypes';
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
    case SWITCH_TASK:
      return {
        ...state,
        selectedTask: action.taskName
      };
    case SWITCH_FAZE: {
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [state.selectedTask]: !action.isInterval
            ? state.tasks[state.selectedTask] + 1
            : state.tasks[state.selectedTask]
        }
      };
    }
    default:
      return state;
  }
};
