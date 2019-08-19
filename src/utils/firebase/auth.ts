import * as firebase from 'firebase/app';
import { auth } from './firebase';

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const loginWithGoogle = () => auth.signInWithPopup(provider);

export const user = auth.onAuthStateChanged(usr => {
  console.log(usr);
});
