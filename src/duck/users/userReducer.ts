import {
  GET_USER,
  GET_CURRENT_USER_START,
  GET_CURRENT_USER_SUCCES,
  GET_CURRENT_USER_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE
} from './userTypes';
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
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.user,
        isGettingUser: false,
        error: null
      };
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};
