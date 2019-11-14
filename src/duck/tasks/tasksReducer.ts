import {
  CREATE_TASK_SUCCESS,
  EDIT_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  SWITCH_TASK_SUCCESS,
  EDIT_TASK_START,
  CREATE_TASK_START,
  DELETE_TASK_START
} from './taskTypes';
import { renameProperty } from '../../utils/helpers';
import {
  FETCH_INITIAL_STATE_SUCCES,
  SKIP_BREAK,
  STOP_AND_SWITCH_FAZE
} from '../timer/timerTypes';
import { TasksActionTypes } from './tasksInterfaces';

export interface TasksState {
  tasks: any;
  selectedTask: string;
  isLoading: boolean;
}

const initialState: TasksState = {
  tasks: {
    default: 0
  },
  selectedTask: 'default',
  isLoading: false
};

export default (state = initialState, action: TasksActionTypes): TasksState => {
  switch (action.type) {
    case EDIT_TASK_START:
    case CREATE_TASK_START:
    case DELETE_TASK_START:
      return {
        ...state,
        isLoading: true
      };
    // case FETCH_INITIAL_STATE_SUCCES:
    //   const { tasks, selectedTask } = action.initial;
    //   return {
    //     ...state,
    //     tasks,
    //     selectedTask
    //   };
    // add FetchInitialStateAction to TasksActionTypes
    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload]: 0
        },
        isLoading: false
      };
    case EDIT_TASK_SUCCESS:
      const { prevTask, newTask } = action.payload;
      const newTasksObj = renameProperty(prevTask, newTask, state.tasks);
      return {
        ...state,
        tasks: { ...newTasksObj },
        selectedTask:
          prevTask === state.selectedTask ? newTask : state.selectedTask,
        isLoading: false
      };
    case DELETE_TASK_SUCCESS: {
      const taskName = action.payload;

      const newTasksState = { ...state.tasks };
      if (taskName !== 'default') delete newTasksState[taskName];
      return {
        ...state,
        tasks: newTasksState,
        isLoading: false
      };
    }
    // case SKIP_BREAK:
    //   return {
    //     ...state,
    //     tasks: {
    //       ...state.tasks,
    //       [state.selectedTask]: !action.payload.isInterval
    //         ? state.tasks[state.selectedTask] + 1
    //         : state.tasks[state.selectedTask]
    //     }
    //   };
    case SWITCH_TASK_SUCCESS:
      return {
        ...state,
        selectedTask: action.payload
      };
    // case STOP_AND_SWITCH_FAZE: {
    //   return {
    //     ...state,
    //     tasks: {
    //       ...state.tasks,
    //       [state.selectedTask]: !action.isInterval
    //         ? state.tasks[state.selectedTask] + 1
    //         : state.tasks[state.selectedTask]
    //     }
    //   };
    // }
    default:
      return state;
  }
};
