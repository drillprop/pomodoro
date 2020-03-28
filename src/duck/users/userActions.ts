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
  LOGIN_WITH_GOOGLE,
  CHANGE_PASSWORD_START,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  DELETE_ACCOUNT_START,
  DELETE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_FAILURE,
  CLEAR_USER_ERROR,
  CHECK_SESSION_SUCCESS,
  CHECK_SESSION_FAILURE,
  NOT_LOGGED
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
  SignOutFailureAction,
  LoginWithGoogleAction,
  CheckSessionAction,
  ChangePasswordStartAction,
  ChangePasswordSuccessAction,
  ChangePasswordFailureAction,
  ChangePasswordParams,
  DeleteAccountStartAction,
  DeleteAccountSuccessAction,
  DeleteAccountFailureAction,
  ClearUserErrorAction,
  CheckSessionSuccessAction,
  CheckSessionFailureAction,
  NotLoggedAction
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

// LOGIN

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

// SIGN OUT

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

// LOGIN WITH GOOGLE

export const loginWithGoogle = (): LoginWithGoogleAction => ({
  type: LOGIN_WITH_GOOGLE
});

// CHECK SESSION

export const checkSession = (): CheckSessionAction => ({
  type: CHECK_SESSION
});

export const checkSessionSuccess = (
  user: UserData
): CheckSessionSuccessAction => ({
  type: CHECK_SESSION_SUCCESS,
  payload: user
});

export const checkSessionFailure = (
  error: SignError
): CheckSessionFailureAction => ({
  type: CHECK_SESSION_FAILURE,
  payload: error
});

export const notLogged = (): NotLoggedAction => ({
  type: NOT_LOGGED
});

// CHANGE PASSWORD

export const changePasswordStart = (
  payload: ChangePasswordParams
): ChangePasswordStartAction => ({
  type: CHANGE_PASSWORD_START,
  payload
});

export const changePasswordSuccess = (): ChangePasswordSuccessAction => ({
  type: CHANGE_PASSWORD_SUCCESS
});

export const changePasswordFailure = (
  error: SignError
): ChangePasswordFailureAction => ({
  type: CHANGE_PASSWORD_FAILURE,
  payload: error
});

// DELETE ACCOUNT

export const deleteAccountStart = (
  password: string
): DeleteAccountStartAction => ({
  type: DELETE_ACCOUNT_START,
  payload: password
});

export const deleteAccountSuccess = (): DeleteAccountSuccessAction => ({
  type: DELETE_ACCOUNT_SUCCESS
});

export const deleteAccountFailure = (
  error: SignError
): DeleteAccountFailureAction => ({
  type: DELETE_ACCOUNT_FAILURE,
  payload: error
});

export const clearUserError = (): ClearUserErrorAction => ({
  type: CLEAR_USER_ERROR
});
