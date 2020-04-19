import {
  CREATE_TASK_SUCCESS,
  EDIT_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  SWITCH_TASK_SUCCESS,
  EDIT_TASK_START,
  CREATE_TASK_START,
  DELETE_TASK_START,
  SWITCH_TASK_FAILURE,
  CREATE_TASK_FAILURE,
  EDIT_TASK_FAILURE,
  DELETE_TASK_FAILURE,
} from './taskTypes';
import { renameProperty } from '../../utils/helpers';
import { STOP_AND_SWITCH_FAZE } from '../timer/timerTypes';
import { TasksActionTypes, TaskError } from './tasksInterfaces';
import {
  LOGIN_SUCCESS,
  SIGN_OUT_SUCCESS,
  CHECK_SESSION_SUCCESS,
} from '../users/userTypes';

export interface TasksState {
  tasks: any;
  selectedTask: string;
  isLoading: boolean;
  error: TaskError | null;
}

const initialState: TasksState = {
  tasks: {
    default: 0,
  },
  selectedTask: 'default',
  isLoading: false,
  error: null,
};

export default (state = initialState, action: TasksActionTypes): TasksState => {
  switch (action.type) {
    case EDIT_TASK_START:
    case CREATE_TASK_START:
    case DELETE_TASK_START:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload]: 0,
        },
        isLoading: false,
      };
    case EDIT_TASK_SUCCESS:
      const { prevTask, newTask } = action.payload;
      const newTasksObj = renameProperty(prevTask, newTask, state.tasks);
      return {
        ...state,
        tasks: { ...newTasksObj },
        selectedTask:
          prevTask === state.selectedTask ? newTask : state.selectedTask,
        isLoading: false,
      };
    case DELETE_TASK_SUCCESS: {
      const taskName = action.payload;

      const newTasksState = { ...state.tasks };
      if (taskName !== 'default') delete newTasksState[taskName];
      return {
        ...state,
        tasks: newTasksState,
        isLoading: false,
        selectedTask:
          taskName === state.selectedTask ? 'default' : state.selectedTask,
      };
    }
    case SWITCH_TASK_SUCCESS:
      return {
        ...state,
        selectedTask: action.payload,
      };
    case STOP_AND_SWITCH_FAZE: {
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [state.selectedTask]: action.payload
            ? state.tasks[state.selectedTask] + 1
            : state.tasks[state.selectedTask],
        },
      };
    }
    case LOGIN_SUCCESS:
    case CHECK_SESSION_SUCCESS:
      return {
        ...state,
        tasks: { ...state.tasks, ...action.payload.tasks },
        selectedTask: action.payload.selectedTask,
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        tasks: {
          default: 0,
        },
        selectedTask: 'default',
      };
    case SWITCH_TASK_FAILURE:
    case CREATE_TASK_FAILURE:
    case EDIT_TASK_FAILURE:
    case DELETE_TASK_FAILURE:
      return {
        ...state,
        error: {
          message: action.payload.message || null,
          code: action.payload.code || null,
        },
      };
    default:
      return state;
  }
};
