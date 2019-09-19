import * as firebase from 'firebase/app';
import { auth } from './firebase';
import { RegisterAndLoginParams } from '../../duck/users/userActions';

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const loginWithGoogle = () => auth.signInWithPopup(provider);

export function getCurrentUser() {
  return new Promise<firebase.User | null>((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
}

export const registerAccount = async (
  registerParams: RegisterAndLoginParams
) => {
  const { email, password, displayName } = registerParams;
  try {
    const newUser = await auth.createUserWithEmailAndPassword(email, password);

    if (newUser) {
      const { user } = await newUser;
      if (user) {
        await user.updateProfile({
          displayName
        });
      }
    }

    return newUser;
  } catch (err) {
    return err;
  }
};

export const loginToAccount = async (loginParams: RegisterAndLoginParams) => {
  const { email, password } = loginParams;
  try {
    const loggedUser = await auth.signInWithEmailAndPassword(email, password);
    return loggedUser;
  } catch (err) {
    return err;
  }
};
