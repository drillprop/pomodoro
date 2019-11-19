// import { dataAndRef } from '../../utils/firebase/firestore';
import { getToday } from '../../utils/helpers';
// import { addUserToFirestore } from '../users/userUtils';
// import { firestore } from '../../utils/firebase/firebase';
import { getCurrentUser } from '../../utils/firebase/auth';
import { database } from '../../utils/firebase/database';

export const getUserConfig = async (uid: string) => {
  try {
    const userRef = database.ref(`users/${uid}/config`);
    const snapShot = await userRef.once('value');
    return await snapShot.val();
  } catch (error) {
    return error;
  }
};

export const saveTimersInDB = async (uid: string) => {
  const isConfig = await getUserConfig(uid);
  // if no config, create config with new timer settings

  // if config update that config with new timer settings
};

// export const incIntervalInFirestore = async (selectedTask: string) => {
//   const today = getToday();

//   const usr = await getCurrentUser();
//   if (!usr) return;

//   const [data, usrRef] = await dataAndRef(usr);

//   // inc in tasks

//   if (data) {
//     const { tasks } = data;
//     if (!tasks || !tasks[selectedTask]) {
//       usrRef.set(
//         {
//           tasks: {
//             [selectedTask]: 1
//           }
//         },
//         { merge: true }
//       );
//     } else {
//       const savedTask = tasks[selectedTask];

//       usrRef.update({
//         [`tasks.${selectedTask}`]: savedTask + 1
//       });
//     }
//   }

//   // inc in taskByDay

//   const todayRef = usrRef.collection('intervalsByDay').doc(today);
//   const todayTasks = await todayRef.get();

//   if (!todayTasks.exists) {
//     await todayRef.set({ [selectedTask]: 1 });
//   }

//   const tasks = await todayTasks.data();

//   if (tasks) {
//     const presentTask = tasks[selectedTask];
//     await todayRef.update({
//       [selectedTask]: presentTask ? presentTask + 1 : 1
//     });
//   }
// };

// export const saveInitialTimelefts = async (timelefts: any) => {
//   const usr = await getCurrentUser();
//   if (!usr) return;

//   const [data, userRef] = await dataAndRef(usr);

//   if (data) {
//     await userRef.set({ config: { ...timelefts } }, { merge: true });
//   }
// };

// export const fetchInitialState = async () => {
//   const usr: any = await getCurrentUser();
//   if (!usr) return;
//   const usrRef = firestore.doc(`users/${usr.uid}`);

//   const doc = await usrRef.get();
//   const data = doc.data();

//   if (!data) {
//     await addUserToFirestore(usr);
//   }

//   return data;
// };
