import { database } from '../../utils/firebase/database';

export const addUserToDB = async (uid: string, email: string) => {
  const userRef = database.ref('users/' + uid);
  const snapShot = await userRef.once('value').then(snap => snap.val());

  if (!snapShot)
    await userRef.set({
      uid,
      email
    });

  return snapShot;
};

// import { firestore } from '../../utils/firebase/firebase';

// export const addUserToFirestore = async (user: any) => {
//   if (!user) return;

//   // const userRef = firestore.doc(`users/${user.uid}`);
//   const snapShot = await userRef.get();
//   if (!snapShot.exists) {
//     const { displayName, email, uid } = user;
//     const createdAt = new Date();

//     try {
//       await userRef.set({
//         displayName,
//         email,
//         uid,
//         createdAt,
//         config: {
//           breakTime: 60 * 10,
//           intervalTime: 60 * 30
//         },
//         tasks: {
//           default: 0
//         },
//         selectedTask: 'default'
//       });
//     } catch (err) {
//       console.log('error creating user', err.message);
//     }
//   }
//   return userRef;
// };
