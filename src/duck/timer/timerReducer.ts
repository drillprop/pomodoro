import {
  UPDATE_TIMER,
  START_TIMER,
  RESET_RETRY_TIMER,
  SWITCH_FAZE,
  CREATE_TASK,
  DELETE_TASK,
  SWITCH_TASK,
  SHOW_MENU,
  SET_TIMERS,
  PAUSE_TIMER,
  EDIT_TASK
} from './timerTypes';

interface InitialTimeleft {
  intervalTime: number;
  breakTime: number;
}

interface Config {
  initialTimeleft: InitialTimeleft;
  tasks: Array<string>;
}

interface Timer {
  isMenuVisible: boolean;
  config: Config;
  tasks: any;
  selectedTask: string;
  isTimerStart: boolean;
  isInterval: boolean;
  endTime: number;
  timeleft: number;
}

const config: Config = {
  initialTimeleft: {
    intervalTime: 5,
    breakTime: 2
  },
  tasks: ['default', 'study', 'work']
};

const initialState: Timer = {
  isMenuVisible: false,
  config,
  tasks: config.tasks.reduce((acc, ctg) => ({ ...acc, [ctg]: 0 }), {}),
  selectedTask: 'default',
  isTimerStart: false,
  isInterval: true,
  endTime: 0,
  timeleft: config.initialTimeleft.intervalTime
};

export default (state = initialState, action: any) => {
  const { intervalTime, breakTime } = state.config.initialTimeleft;
  switch (action.type) {
    case UPDATE_TIMER:
      return {
        ...state,
        [action.field]: action[action.field]
      };
    case START_TIMER:
      return {
        ...state,
        isTimerStart: true,
        endTime: state.timeleft * 1000 + action.startTime
      };
    case PAUSE_TIMER:
      return {
        ...state,
        isTimerStart: false,
        timeleft: Math.floor((state.endTime - action.pauseTime) / 1000 + 1),
        endTime: 0
      };
    case RESET_RETRY_TIMER:
      return {
        ...state,
        isTimerStart: action.isTimerStart,
        timeleft: state.isInterval ? intervalTime : breakTime
      };
    case SWITCH_FAZE:
      return {
        ...state,
        isInterval: !action.isInterval,
        endTime: 0,
        isTimerStart: false,
        timeleft: !action.isInterval ? intervalTime : breakTime,
        tasks: {
          ...state.tasks,
          [state.selectedTask]: !action.isInterval
            ? state.tasks[state.selectedTask] + 1
            : state.tasks[state.selectedTask]
        }
      };
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
    case SWITCH_TASK: {
      return {
        ...state,
        selectedTask: action.taskName,
        isTimerStart: false,
        isInterval: true,
        timeleft: intervalTime,
        tasks: {
          ...state.tasks,
          [state.selectedTask]: !state.isInterval
            ? state.tasks[state.selectedTask] + 1
            : state.tasks[state.selectedTask]
        }
      };
    }
    case SHOW_MENU: {
      return {
        ...state,
        isMenuVisible: action.isMenuVisible
      };
    }
    case SET_TIMERS: {
      return {
        ...state,
        isInterval: true,
        isTimerStart: false,
        timeleft:
          action.timer === 'breakTime' ? state.timeleft : action.seconds,
        config: {
          ...state.config,
          initialTimeleft: {
            ...state.config.initialTimeleft,
            [action.timer]: action.seconds
          }
        }
      };
    }
    default:
      return state;
  }
};
