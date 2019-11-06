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

export type RegisterAndLoginParams = {
  email: string;
  password: string;
  displayName?: string;
};

export const checkSession = () => ({
  type: CHECK_SESSION
});

export const loginStart = (email: string, password: string) => ({
  type: LOGIN_START,
  email,
  password
});

export const loginSuccess = (user: any) => ({
  type: LOGIN_SUCCESS,
  user
});

export const loginFailure = (error: any) => ({
  type: LOGIN_FAILURE,
  error
});

export const loginWithGoogle = () => ({
  type: LOGIN_WITH_GOOGLE
});

export const registerStart = (
  email: string,
  password: string,
  displayName: string
) => ({
  type: REGISTER_START,
  email,
  password,
  displayName
});

export const registerSuccess = (user: any) => ({
  type: REGISTER_SUCCESS,
  user
});

export const registerFailure = (error: any) => ({
  type: REGISTER_FAILURE,
  error
});

export const signOutStart = () => ({ type: SIGN_OUT_START });

export const signOutSuccess = () => ({ type: SIGN_OUT_SUCCESS });

export const signOutFailure = (error: any) => ({
  type: SIGN_OUT_FAILURE,
  error
});
