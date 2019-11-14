import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  CHECK_SESSION,
  LOGIN_WITH_GOOGLE
} from './userTypes';
import {
  RegisterAndLoginParams,
  RegisterStartAction,
  RegisterSuccessAction,
  RegisterFailureAction,
  LoginStartAction,
  LoginSuccessAction,
  LoginFailureAction,
  SignError,
  UserData,
  SignOutStartAction,
  SignOutSuccessAction,
  SignOutFailureAction
} from './userInterfaces';

// REGISTER

export const registerStart = (
  credentials: RegisterAndLoginParams
): RegisterStartAction => ({
  type: REGISTER_START,
  payload: credentials
});

export const registerSuccess = (user: UserData): RegisterSuccessAction => ({
  type: REGISTER_SUCCESS,
  payload: user
});

export const registerFailure = (error: SignError): RegisterFailureAction => ({
  type: REGISTER_FAILURE,
  payload: error
});

export const loginStart = (
  credentials: RegisterAndLoginParams
): LoginStartAction => ({
  type: LOGIN_START,
  payload: credentials
});

export const loginSuccess = (user: UserData): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: user
});

export const loginFailure = (error: SignError): LoginFailureAction => ({
  type: LOGIN_FAILURE,
  payload: error
});

export const signOutStart = (): SignOutStartAction => ({
  type: SIGN_OUT_START
});

export const signOutSuccess = (): SignOutSuccessAction => ({
  type: SIGN_OUT_SUCCESS
});

export const signOutFailure = (error: SignError): SignOutFailureAction => ({
  type: SIGN_OUT_FAILURE,
  payload: error
});

// todo
export const checkSession = () => ({
  type: CHECK_SESSION
});

export const loginWithGoogle = () => ({
  type: LOGIN_WITH_GOOGLE
});
