import { GET_USER } from '../reduxTypes';

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
