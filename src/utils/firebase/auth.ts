import * as firebase from 'firebase/app';
import { auth } from './firebase';
import { RegisterAndLoginParams } from '../../duck/users/userActions';

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const loginWithGoogle = () => auth.signInWithPopup(provider);

export const registerAccount = async (
  registerParams: RegisterAndLoginParams
) => {
  const { email, password } = registerParams;
  try {
    const newUser = await auth.createUserWithEmailAndPassword(email, password);
    return newUser;
  } catch (err) {
    return err;
  }
};

export const loginToAccount = async (loginParams: RegisterAndLoginParams) => {
  const { email, password } = loginParams;
  try {
    const login = await auth.signInWithEmailAndPassword(email, password);
    return login;
  } catch (err) {
    return err;
  }
};

export const logout = async () => {
  try {
    await auth.signOut();
    console.log('sign out');
  } catch (err) {
    console.log(err);
  }
};
