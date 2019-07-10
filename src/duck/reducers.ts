interface Timer {
  seconds: number;
  timeString: string;
}

const initialState: Timer = {
  seconds: 0,
  timeString: ''
};

export default (state = initialState) => {
  return state;
};
