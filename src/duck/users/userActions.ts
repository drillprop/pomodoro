import { GET_USER } from '../reduxTypes';
import { registerAccount, loginToAccount } from '../../utils/firebase/auth';
import { addUserToFirestore } from '../../utils/firebase/firestore';

export const getUser = (user: any) => {
  if (user) addUserToFirestore();
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
