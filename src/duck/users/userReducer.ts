import { GET_USER, REGISTER } from '../reduxTypes';
import { User } from 'firebase';

export type UserState = {
  user: null | User;
};

const initialState: UserState = {
  user: null
};

export default (state: UserState = initialState, action: any) => {
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
