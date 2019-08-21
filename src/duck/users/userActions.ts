import { GET_USER } from '../reduxTypes';
import { registerAccount, loginToAccount } from '../../utils/firebase/auth';

export const getUser = (user: any) => {
  return {
    type: GET_USER,
    user
  };
};

export type RegisterAndLoginParams = {
  email: string;
  password: string;
  displayName?: string;
};

export const registerAction = (
  registerParams: RegisterAndLoginParams
) => async (dispatch: any) => {
  const registeredUser = await registerAccount({ ...registerParams });
  const { user } = await registeredUser;
  if (user) {
    const { uid, email, displayName } = user;
    dispatch({
      type: GET_USER,
      user: {
        uid,
        email,
        displayName
      }
    });
  } else {
    console.log(registeredUser);
  }
};

export const loginAction = (loginParams: RegisterAndLoginParams) => async (
  dispatch: any
) => {
  const loggedUser = await loginToAccount({ ...loginParams });
  const { user } = await loggedUser;
  if (user) {
    const { uid, email, displayName } = user;
    dispatch({
      type: GET_USER,
      user: {
        uid,
        email,
        displayName
      }
    });
  } else {
    console.log(loggedUser);
  }
};
