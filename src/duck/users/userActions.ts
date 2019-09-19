import {
  GET_CURRENT_USER_START,
  GET_CURRENT_USER_SUCCES,
  GET_CURRENT_USER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from './userTypes';
import { auth } from '../../utils/firebase/firebase';
import { addUserToFirestore } from './userUtils';

export type RegisterAndLoginParams = {
  email: string;
  password: string;
  displayName?: string;
};

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

export const getCurrentUserStart = () => ({
  type: GET_CURRENT_USER_START
});

export const getCurrentUserSuccess = (user: any) => ({
  type: GET_CURRENT_USER_SUCCES,
  user
});

export const getCurrentUserFailure = (error: any) => ({
  type: GET_CURRENT_USER_FAILURE,
  error
});

export const getCurrentUser = () => {
  return (dispatch: any) => {
    dispatch(getCurrentUserStart());
    auth.onAuthStateChanged(
      async usr => {
        if (usr) {
          await addUserToFirestore(usr, null);
        }
        dispatch(getCurrentUserSuccess(usr));
      },
      error => dispatch(getCurrentUserFailure(error))
    );
  };
};
