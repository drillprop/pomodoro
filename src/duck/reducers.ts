import { SET_TIMER } from './types';

interface Timer {
  seconds: number;
  timeAsString: string;
}

const initialState: Timer = {
  seconds: 0,
  timeAsString: ''
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_TIMER:
      return {
        ...state,
        seconds: action.seconds,
        timeAsString: action.timeAsString
      };
    default:
      return state;
  }
};
