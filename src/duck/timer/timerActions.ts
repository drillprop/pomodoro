import {
  UPDATE_TIMER,
  RESET_TIMER,
  SHOW_MENU,
  SET_TIMERS,
  START_TIMER,
  PAUSE_TIMER,
  STOP_AND_SWITCH_FAZE,
  SKIP_BREAK,
  FETCH_TIMELEFTS
} from '../reduxTypes';
import {
  incIntervalInFirestore,
  saveInitialTimelefts,
  getTimeleftFromFirestore
} from '../../utils/firebase/firestore';

export const updateTimer = (seconds: number, isInterval: boolean) => {
  let field = isInterval ? 'intervalTime' : 'breakTime';
  return {
    type: UPDATE_TIMER,
    field,
    [field]: seconds
  };
};

let timeoutId: any = 0;

export const startTimer = (
  startTime: number,
  isTimerStart: boolean,
  isInterval: boolean,
  timeleft: number,
  selectedTask: string
) => {
  return async (dispatch: any) => {
    if (!isTimerStart) {
      dispatch({
        type: START_TIMER,
        startTime
      });
      timeoutId = setTimeout(() => {
        !isInterval && incIntervalInFirestore(selectedTask);
        dispatch({ type: STOP_AND_SWITCH_FAZE, isInterval });
      }, timeleft * 1000 + 1000);
    }
  };
};

export const pauseTimer = (pauseTime: number) => {
  clearTimeout(timeoutId);
  return {
    type: PAUSE_TIMER,
    pauseTime
  };
};

export const resetTimer = () => {
  clearTimeout(timeoutId);
  return {
    type: RESET_TIMER
  };
};

export const skipBreak = () => {
  clearTimeout(timeoutId);
  return {
    type: SKIP_BREAK
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
  return async (dispatch: any) => {
    const isInterval = timer === 'breakTime' ? false : true;

    await saveInitialTimelefts(isInterval, seconds);

    dispatch({ type: SET_TIMERS, seconds, timer });
  };
};

export const fetchTimers = (usr: any) => {
  return async (dispatch: any) => {
    const initialTimeleft = await getTimeleftFromFirestore(usr);
    const { breakTime, intervalTime } = initialTimeleft;
    dispatch({
      type: FETCH_TIMELEFTS,
      breakTime,
      intervalTime
    });
  };
};
