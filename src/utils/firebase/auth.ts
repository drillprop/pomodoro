import * as firebase from 'firebase/app';
import { auth } from './firebase';
import { RegisterAndLoginParams } from '../../duck/users/userActions';

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const loginWithGoogle = () =>
  auth.signInWithPopup(provider).catch(err => console.log(err));

export function getCurrentUser() {
  return new Promise<firebase.User | null>((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(user => {
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
  } catch (err) {
    return err;
  }
};
