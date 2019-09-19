import {
  SWITCH_TASK,
  CREATE_TASK_SUCCESS,
  EDIT_TASK_SUCCESS,
  DELETE_TASK_SUCCESS
} from './taskTypes';
import { renameProperty } from '../../utils/helpers';
import {
  FETCH_INITIAL_STATE_SUCCES,
  SKIP_BREAK,
  STOP_AND_SWITCH_FAZE
} from '../timer/timerTypes';

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
    case FETCH_INITIAL_STATE_SUCCES:
      const { tasks, selectedTask } = action.initial;
      return {
        ...state,
        tasks: {
          ...tasks,
          ...state.tasks
        },
        selectedTask
      };
    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.taskName]: 0
        }
      };
    case EDIT_TASK_SUCCESS:
      const { prevTask, newTask } = action;
      const newTasksObj = renameProperty(prevTask, newTask, state.tasks);
      return {
        ...state,
        tasks: { ...newTasksObj },
        selectedTask:
          prevTask === state.selectedTask ? action.newTask : state.selectedTask
      };
    case DELETE_TASK_SUCCESS: {
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
