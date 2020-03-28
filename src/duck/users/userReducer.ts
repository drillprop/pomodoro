import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  LOGIN_START,
  REGISTER_START,
  LOGIN_WITH_GOOGLE,
  CHECK_SESSION,
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_START,
  CHANGE_PASSWORD_SUCCESS,
  DELETE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_START,
  DELETE_ACCOUNT_FAILURE,
  CLEAR_USER_ERROR,
  CHECK_SESSION_SUCCESS,
  CHECK_SESSION_FAILURE,
  NOT_LOGGED
} from './userTypes';
import { UserActionTypes, SignError, UserData } from './userInterfaces';

export interface UserState {
  currentUser: {
    email: string;
    uid: string;
    loginProvider: 'password' | 'google.com' | '';
  } | null;
  isGettingUser: boolean;
  error: SignError | null;
}

const initialState: UserState = {
  currentUser: null,
  isGettingUser: true,
  error: null
};

export default (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case LOGIN_START:
    case REGISTER_START:
    case CHECK_SESSION:
    case LOGIN_WITH_GOOGLE:
    case CHANGE_PASSWORD_START:
    case DELETE_ACCOUNT_START:
      return {
        ...state,
        isGettingUser: true,
        error: null
      };
    case CHANGE_PASSWORD_SUCCESS:
    case NOT_LOGGED:
      return {
        ...state,
        isGettingUser: false
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
    case CHECK_SESSION_SUCCESS:
      return {
        ...state,
        isGettingUser: false,
        currentUser: {
          email: action.payload.email,
          uid: action.payload.uid,
          loginProvider: action.payload.loginProvider
        }
      };
    case LOGIN_FAILURE:
    case CHECK_SESSION_FAILURE:
    case REGISTER_FAILURE:
    case SIGN_OUT_FAILURE:
    case CHANGE_PASSWORD_FAILURE:
    case DELETE_ACCOUNT_FAILURE:
      return {
        ...state,
        isGettingUser: false,
        error: {
          message: action.payload.message || null,
          code: action.payload.code || null
        }
      };
    case SIGN_OUT_SUCCESS:
    case DELETE_ACCOUNT_SUCCESS:
      return {
        ...state,
        isGettingUser: false,
        currentUser: null
      };
    case CLEAR_USER_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
