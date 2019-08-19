import { CREATE_TASK, EDIT_TASK, DELETE_TASK } from './tasksTypes';

interface InitialTimeleft {
  intervalTime: number;
  breakTime: number;
}

interface Config {
  initialTimeleft: InitialTimeleft;
  tasks: Array<string>;
}

interface Timer {
  config: Config;
  tasks: any;
  selectedTask: string;
}

const config: Config = {
  initialTimeleft: {
    intervalTime: 5,
    breakTime: 2
  },
  tasks: ['default', 'study', 'work']
};

const initialState: Timer = {
  config,
  tasks: config.tasks.reduce((acc, ctg) => ({ ...acc, [ctg]: 0 }), {}),
  selectedTask: 'default'
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        config: {
          ...state.config,
          tasks: [...state.config.tasks, action.taskName]
        },
        tasks: {
          ...state.tasks,
          [action.taskName]: 0
        }
      };
    case EDIT_TASK:
      const { prevTask, newTask } = action;
      const { tasks } = state.config;
      const newTasksArray = [...tasks];
      newTasksArray[tasks.indexOf(prevTask)] = newTask;

      const newTasksObject = { ...state.tasks };
      if (prevTask !== 'default') delete newTasksObject[prevTask];

      return {
        ...state,
        config: {
          ...state.config,
          tasks: [...newTasksArray]
        },
        tasks: { ...newTasksObject, [newTask]: state.tasks[prevTask] }
      };
    case DELETE_TASK: {
      const { taskName } = action;

      const newTasksState = { ...state.tasks };
      if (taskName !== 'default') delete newTasksState[taskName];
      return {
        ...state,
        config: {
          ...state.config,
          tasks:
            taskName !== 'default'
              ? state.config.tasks.filter(task => task !== taskName)
              : state.config.tasks
        },
        tasks: newTasksState
      };
    }
    default:
      return state;
  }
};
