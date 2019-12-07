import * as firebase from 'firebase/app';
import { auth } from './firebase';
import { RegisterAndLoginParams } from '../../duck/users/userInterfaces';

export const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const loginWithGoogle = () =>
  auth.signInWithPopup(provider).catch(error => {
    throw new Error(error);
  });

export function getCurrentUser() {
  return new Promise<firebase.User | null>((resolve, reject) => {
    const unsubscribe: firebase.Unsubscribe = auth.onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
}

export const loginToAccount = async (loginParams: RegisterAndLoginParams) => {
  const { email, password } = loginParams;
  try {
    const loggedUser = await auth.signInWithEmailAndPassword(email, password);
    return loggedUser;
  } catch (error) {
    throw new Error(error);
  }
};
