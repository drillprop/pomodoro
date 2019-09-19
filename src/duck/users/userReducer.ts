import {
  GET_USER,
  GET_CURRENT_USER_START,
  GET_CURRENT_USER_SUCCES,
  GET_CURRENT_USER_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_FAILURE
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
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.user
      };
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
