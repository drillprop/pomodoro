import { firestore, FieldValue } from './firebase';
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
        createdAt,
        tasks: {
          default: 0
        }
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

export const saveTasksInFirestore = async (usr: any, task: any) => {
  if (!usr) return;

  const usrRef = firestore.doc(`users/${usr.uid}`);
  const doc = await usrRef.get();
  const data = await doc.data();

  if (data) {
    if (!data.tasks.hasOwnProperty(task)) {
      try {
        usrRef.set(
          {
            tasks: {
              [task]: 0
            }
          },
          { merge: true }
        );
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(`${task} already exists`);
    }
  }
};

export const firestoreData = async (usr: any) => {
  if (!usr) return;

  const usrRef = firestore.doc(`users/${usr.uid}`);
  const doc = await usrRef.get();
  const data = await doc.data();

  return data;
};

export const deleteTaskFromFirestore = async (usr: any, task: string) => {
  if (!usr) return;
  const usrRef = firestore.doc(`users/${usr.uid}`);
  console.log(usrRef);
  const remove = await usrRef.update({
    [`tasks.${task}`]: FieldValue.delete()
  });
  console.log(remove);
};
