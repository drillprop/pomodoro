import { firestore } from './firebase';
import { User } from 'firebase';

export const addUserToFirestore = async (usr: User) => {
  if (!usr) return;

  const userRef = firestore.doc(`users/${usr.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = usr;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt
      });
    } catch (err) {
      console.log(err);
    }
  }

  return userRef;
};

export const getUsrDataFromFirestore = async (usr: any) => {
  if (!usr) return;

  const user = firestore.collection('users').doc(`${usr.uid}`);
  const doc = await user.get();
  if (doc.exists) {
    const data = await doc.data();
    return data;
  } else {
    return null;
  }
};

export const saveTasksInFirestore = async (usr: any, obj: any) => {
  if (!usr) return;

  const usrRef = firestore.doc(`users/${usr.uid}`);
  usrRef.update({ tasks: obj });
  const snapshot = await usrRef.get();
  console.log(snapshot, obj);
};
