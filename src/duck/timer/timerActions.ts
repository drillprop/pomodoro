import {
  UPDATE_TIMER,
  START_PAUSE_TIMER,
  RESET_RETRY_TIMER,
  SWITCH_FAZE,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  SWITCH_CATEGORY,
  SHOW_CONFIG
} from './timerTypes';

export const updateTimer = (seconds: number, isInterval: boolean) => {
  let field = isInterval ? 'intervalTime' : 'breakTime';
  return {
    type: UPDATE_TIMER,
    field,
    [field]: seconds
  };
};

export const startPauseTimer = (isTimerStart: boolean) => {
  return {
    type: START_PAUSE_TIMER,
    isTimerStart
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
  categoryName: string = 'default'
) => {
  return {
    type: SWITCH_FAZE,
    isInterval,
    categoryName
  };
};

export const createCategory = (categoryName: string) => {
  return {
    type: CREATE_CATEGORY,
    categoryName
  };
};

export const deleteCategory = (categoryName: string) => {
  return {
    type: DELETE_CATEGORY,
    categoryName
  };
};

export const switchCategory = (categoryName: string) => {
  return {
    type: SWITCH_CATEGORY,
    categoryName
  };
};

export const showConfig = () => {
  return {
    type: SHOW_CONFIG
  };
};
