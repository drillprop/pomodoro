import { GET_USER, REGISTER } from '../reduxTypes';

const initialState = {
  user: null
};

export default (state: any = initialState, action: any) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.user
      };
    case REGISTER: {
      return {
        ...state,
        user: action.user
      };
    }
    default:
      return state;
  }
};
