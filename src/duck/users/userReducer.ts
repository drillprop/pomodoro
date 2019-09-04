import {
  GET_USER,
  GET_CURRENT_USER_START,
  GET_CURRENT_USER_SUCCES,
  GET_CURRENT_USER_FAILURE
} from '../reduxTypes';
import { User } from 'firebase';

export type UserState = {
  user: null | User;
  isGettingUser: boolean;
  error: any;
};

const initialState: UserState = {
  user: null,
  isGettingUser: false,
  error: null
};

export default (state: UserState = initialState, action: any) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.user
      };
    case GET_CURRENT_USER_START:
      return {
        ...state,
        isGettingUser: true
      };
    case GET_CURRENT_USER_SUCCES:
      return {
        ...state,
        isGettingUser: false,
        user: action.user
      };
    case GET_CURRENT_USER_FAILURE:
      return {
        ...state,
        isGettingUser: false,
        error: action.error
      };
    default:
      return state;
  }
};
