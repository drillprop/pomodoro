import {
  GET_CURRENT_USER_START,
  GET_CURRENT_USER_SUCCES,
  GET_CURRENT_USER_FAILURE
} from './userTypes';
import { auth } from '../../utils/firebase/firebase';
import { addUserToFirestore } from '../../utils/firebase/firestore';

export type RegisterAndLoginParams = {
  email: string;
  password: string;
  displayName?: string;
};

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
