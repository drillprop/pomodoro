import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  LOGIN_START,
  REGISTER_START
} from './userTypes';
import { User } from 'firebase';

export type UserState = {
  user: null | User;
  isGettingUser: boolean;
  error: any;
};

const initialState: UserState = {
  user: null,
  isGettingUser: true,
  error: null
};

export default (state: UserState = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_START:
    case REGISTER_START:
      return {
        ...state,
        isGettingUser: true,
        error: null
      };
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
        isGettingUser: false,
        error: action.error
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        isGettingUser: false,
        user: null
      };
    default:
      return state;
  }
};
