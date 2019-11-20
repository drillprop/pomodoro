import { database } from '../../utils/firebase/database';

export const addUserToDB = async (uid: string, email: string) => {
  try {
    const userRef = database.ref('users/' + uid);
    const snapShot = await userRef.once('value').then(snap => snap.val());
    if (!snapShot) {
      await userRef.set({
        uid,
        email
      });
    }
    return snapShot;
  } catch (error) {
    return error;
  }
};

export const getConfigAndTasks = async (uid: string) => {
  try {
    const userRef = database.ref(`users/${uid}/`);
    const snapShot = await userRef.once('value');
    const values = await snapShot.val();
    const { config, tasks, selectedTask } = values;
    return {
      config: config || null,
      tasks: tasks || null,
      selectedTask: selectedTask || 'default'
    };
  } catch (error) {
    return error;
  }
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
