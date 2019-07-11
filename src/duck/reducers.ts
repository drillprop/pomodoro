import { SET_TIMER } from './types';

interface Timer {
  seconds: number;
}

const initialState: Timer = {
  seconds: 60 * 30
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_TIMER:
      return {
        ...state,
        seconds: action.seconds
      };
    default:
      return state;
  }
};
