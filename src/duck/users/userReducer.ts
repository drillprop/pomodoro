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
  CHECK_SESSION
} from './userTypes';
import { UserActionTypes, SignError, UserData } from './userInterfaces';

export interface UserState {
  currentUser: {
    email: string;
    uid: string;
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
      return {
        ...state,
        isGettingUser: true,
        error: null
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        isGettingUser: false,
        currentUser: { email: action.payload.email, uid: action.payload.uid }
      };
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        isGettingUser: false,
        error: {
          message: action.payload.message || null,
          code: action.payload.code || null
        }
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        isGettingUser: false,
        currentUser: null
      };
    default:
      return state;
  }
};
