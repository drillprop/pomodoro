import { useState } from 'react';

const useInput = (initial: any) => {
  const [state, setState] = useState(initial);
  console.log(state);

  const updateState = (e: any) => {
    const { name, max, min } = e.target;
    const value = parseInt(e.target.value);
    if (value < max && value > min) {
      console.log('good');
      setState({ ...state, [name]: value });
    } else if (value > max) {
      setState({ ...state, [name]: parseInt(max) });
    } else {
      setState({ ...state, [name]: parseInt(min) });
    }
  };

  const submitState = (e: any) => {
    e.preventDefault();
    console.log('Submited', state);
  };
  return [updateState, submitState, state];
};

export default useInput;
