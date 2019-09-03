import {
  CREATE_TASK,
  EDIT_TASK,
  DELETE_TASK,
  SWITCH_TASK,
  STOP_AND_SWITCH_FAZE,
  SKIP_BREAK,
  FETCH_TASKS
} from '../reduxTypes';
import { renameProperty } from '../../utils/helpers';

export interface TasksState {
  tasks: any;
  selectedTask: string;
}

const initialState: TasksState = {
  tasks: {
    default: 0
  },
  selectedTask: 'default'
};

export default (state: TasksState = initialState, action: any) => {
  switch (action.type) {
    case FETCH_TASKS:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          ...action.tasks
        }
      };
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
    case SKIP_BREAK:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [state.selectedTask]: !action.isInterval
            ? state.tasks[state.selectedTask] + 1
            : state.tasks[state.selectedTask]
        }
      };
    case SWITCH_TASK:
      return {
        ...state,
        selectedTask: action.taskName
      };
    case STOP_AND_SWITCH_FAZE: {
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
