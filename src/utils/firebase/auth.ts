import * as firebase from 'firebase/app';
import { auth } from './firebase';

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const loginWithGoogle = () => auth.signInWithPopup(provider);

type RegisterParams = {
  email: string;
  password: string;
  displayName: string;
};

export const registerAccount = async (registerParams: RegisterParams) => {
  const { email, password } = registerParams;
  try {
    const newUser = await auth.createUserWithEmailAndPassword(email, password);
    return newUser;
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
