import { database } from '../../utils/firebase/database';
import { TimeleftsParams } from './timerInterfaces';

export const saveTimersInDB = async (uid: string, config: TimeleftsParams) => {
  try {
    await database.ref(`users/${uid}`).set({
      config: { ...config }
    });
  } catch (error) {
    return error;
  }
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
