import { GET_USER } from '../reduxTypes';

export const getUser = (user: any) => {
  return {
    type: GET_USER,
    user
  };
};
