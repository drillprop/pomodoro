import { useState } from 'react';

const useInput = (initial: any) => {
  const [state, setState] = useState(initial);

  const updateState = (e: any) => {
    const { name, max, min, value } = e.target;
    const spliced = parseInt(
      value
        .split('')
        .splice(value.length - 2, 2)
        .join('')
    );
    if (spliced < max && spliced > min) {
      console.log('good');
      setState({ ...state, [name]: spliced });
    } else if (spliced > max) {
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
