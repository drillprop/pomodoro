import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  LOGIN_WITH_GOOGLE,
  CHECK_SESSION
} from './userTypes';
import { Config } from '../timer/timerReducer';

export interface UserData {
  uid: string;
  email: string;
  config: Config;
  selectedTask: string | 'default';
  tasks: any | null;
}

export interface RegisterAndLoginParams {
  email: string;
  password: string;
}

export interface SignError {
  code: string;
  message: string;
}

// REGISTER ACTIONS INTERFACES

export interface RegisterStartAction {
  type: typeof REGISTER_START;
  payload: RegisterAndLoginParams;
}
export interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  payload: UserData;
}
export interface RegisterFailureAction {
  type: typeof REGISTER_FAILURE;
  payload: SignError;
}

// LOGIN ACTIONS INTERFACES

export interface LoginStartAction {
  type: typeof LOGIN_START;
  payload: RegisterAndLoginParams;
}
export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: UserData;
}
export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: SignError;
}

// SIGN OUT INTERFACES

export interface SignOutStartAction {
  type: typeof SIGN_OUT_START;
}
export interface SignOutSuccessAction {
  type: typeof SIGN_OUT_SUCCESS;
}
export interface SignOutFailureAction {
  type: typeof SIGN_OUT_FAILURE;
  payload: SignError;
}

// LOGIN WITH GOOGLE INTERFACES

export interface LoginWithGoogleAction {
  type: typeof LOGIN_WITH_GOOGLE;
}

// CHECK SESSION INTERFACE

export interface CheckSessionAction {
  type: typeof CHECK_SESSION;
}

export type UserActionTypes =
  | RegisterStartAction
  | RegisterSuccessAction
  | RegisterFailureAction
  | LoginStartAction
  | LoginSuccessAction
  | LoginFailureAction
  | SignOutStartAction
  | SignOutSuccessAction
  | SignOutFailureAction
  | LoginWithGoogleAction
  | CheckSessionAction;
