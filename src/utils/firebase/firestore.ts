import { firestore } from './firebase';

export const createUser = async (usr: any) => {
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
