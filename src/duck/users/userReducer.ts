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
import { UserActionTypes, SignError, UserData } from './userInterfaces';

export type UserState = {
  currentUser: UserData | null;
  isGettingUser: boolean;
  error: SignError | null;
};

const initialState: UserState = {
  currentUser: null,
  isGettingUser: true,
  error: null
};

export default (state = initialState, action: UserActionTypes): any => {
  console.log(state);
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
        currentUser: { ...action.payload }
      };
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        isGettingUser: false,
        error: null
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
