import { GET_USER, REGISTER } from '../reduxTypes';
import { registerAccount } from '../../utils/firebase/auth';

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

export const register = (registerParams: RegisterAndLoginParams) => async (
  dispatch: any
) => {
  const registeredUser = await registerAccount({ ...registerParams });
  const { user } = await registeredUser;
  if (user) {
    const { uid, email } = user;
    dispatch({
      type: REGISTER,
      user: {
        uid,
        email
      }
    });
  }
};
