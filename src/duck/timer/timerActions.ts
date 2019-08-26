import {
  UPDATE_TIMER,
  RESET_RETRY_TIMER,
  SWITCH_FAZE,
  SHOW_MENU,
  SET_TIMERS,
  START_TIMER,
  PAUSE_TIMER,
  STOP_AND_SWITCH_FAZE
} from '../reduxTypes';

export const updateTimer = (seconds: number, isInterval: boolean) => {
  let field = isInterval ? 'intervalTime' : 'breakTime';
  return {
    type: UPDATE_TIMER,
    field,
    [field]: seconds
  };
};

// export const startTimer = (startTime: number) => {
//   return {
//     type: START_TIMER,
//     startTime
//   };
// };

export const resetRetryTimer = (isTimerStart: boolean) => {
  return {
    type: RESET_RETRY_TIMER,
    isTimerStart
  };
};

let timeout: any = 0;

export const startTimer = (
  startTime: number,
  isTimerStart: boolean,
  isInterval: boolean,
  timeleft: number
) => {
  return async (dispatch: any) => {
    if (!isTimerStart) {
      dispatch({
        type: START_TIMER,
        startTime
      });
      timeout = setTimeout(
        () => dispatch({ type: STOP_AND_SWITCH_FAZE, isInterval }),
        timeleft * 1000 + 1000
      );
    }
  };
};

export const pauseTimer = (pauseTime: number) => {
  clearTimeout(timeout);
  return {
    type: PAUSE_TIMER,
    pauseTime
  };
};

export const stopAndSwitchFaze = (
  timeleft: number,
  isInterval: boolean
) => async (dispatch: any) => {
  setTimeout(() => {
    dispatch({
      type: STOP_AND_SWITCH_FAZE,
      timeleft,
      isInterval
    });
  }, timeleft * 1000 + 1000);
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
