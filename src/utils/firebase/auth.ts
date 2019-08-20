import * as firebase from 'firebase/app';
import { auth } from './firebase';
import { createUser } from './firestore';

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const loginWithGoogle = () => auth.signInWithPopup(provider);

export const logout = async () => {
  try {
    await auth.signOut();
    console.log('sign out');
  } catch (err) {
    console.log(err);
  }
};

export const user = auth.onAuthStateChanged(usr => {
  createUser(usr);
});
