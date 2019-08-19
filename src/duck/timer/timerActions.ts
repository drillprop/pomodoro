import {
  UPDATE_TIMER,
  RESET_RETRY_TIMER,
  SWITCH_FAZE,
  SHOW_MENU,
  SET_TIMERS,
  START_TIMER,
  PAUSE_TIMER
} from '../reduxTypes';

export const updateTimer = (seconds: number, isInterval: boolean) => {
  let field = isInterval ? 'intervalTime' : 'breakTime';
  return {
    type: UPDATE_TIMER,
    field,
    [field]: seconds
  };
};

export const startTimer = (startTime: number) => {
  return {
    type: START_TIMER,
    startTime
  };
};

export const pauseTimer = (pauseTime: number) => {
  return {
    type: PAUSE_TIMER,
    pauseTime
  };
};

export const resetRetryTimer = (isTimerStart: boolean) => {
  return {
    type: RESET_RETRY_TIMER,
    isTimerStart
  };
};

export const switchFaze = (
  isInterval: boolean,
  taskName: string = 'default'
) => {
  return {
    type: SWITCH_FAZE,
    isInterval,
    taskName
  };
};

export const showMenu = (isMenuVisible: boolean) => {
  return {
    type: SHOW_MENU,
    isMenuVisible
  };
};

export const setTimers = (seconds: number, timer: string) => {
  return {
    type: SET_TIMERS,
    seconds,
    timer
  };
};
