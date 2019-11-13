// // import { dataAndRef } from '../../utils/firebase/firestore';
// import { FieldValue } from '../../utils/firebase/firebase';
// import { getToday } from '../../utils/helpers';
// import { getCurrentUser } from '../../utils/firebase/auth';

// export const saveTasksInFirestore = async (task: any) => {
//   const usr = await getCurrentUser();
//   if (!usr) return;

//   const [data, usrRef] = await dataAndRef(usr);

//   if (data) {
//     if (!data.tasks || !data.tasks.hasOwnProperty(task)) {
//       try {
//         await usrRef.set(
//           {
//             tasks: {
//               [task]: 0
//             }
//           },
//           { merge: true }
//         );
//       } catch (err) {
//         console.error(err);
//       }
//     } else {
//       console.log(`${task} already exists`);
//     }
//   }
// };

// export const deleteTaskFromFirestore = async (task: string) => {
//   const usr = await getCurrentUser();
//   if (!usr) return;

//   const [data, usrRef] = await dataAndRef(usr);
//   const { selectedTask } = await data;

//   await usrRef.update({
//     [`tasks.${task}`]: FieldValue.delete(),
//     selectedTask: selectedTask === task ? 'default' : selectedTask
//   });
// };

// export const updateTaskInFirestore = async (
//   oldTask: string,
//   newTask: string
// ) => {
//   const today = getToday();

//   const usr = await getCurrentUser();
//   if (!usr) return;

//   // update in firestore
//   const [data, usrRef] = await dataAndRef(usr);
//   const { selectedTask } = await data;

//   const tasks = data ? data.tasks : data;
//   const savedTask = tasks[oldTask];

//   await usrRef.update({
//     [`tasks.${oldTask}`]: FieldValue.delete(),
//     [`tasks.${newTask}`]: savedTask,
//     selectedTask: selectedTask === oldTask ? newTask : selectedTask
//   });

//   // update in intervalsByDay

//   const todayRef = usrRef.collection('intervalsByDay').doc(today);
//   const todaySnapshot = await todayRef.get();

//   if (todaySnapshot.exists) {
//     await todayRef.update({
//       [oldTask]: FieldValue.delete(),
//       [newTask]: savedTask
//     });
//   }
// };

// export const saveSelectedTask = async (selectedTask: string) => {
//   const usr = await getCurrentUser();

//   if (!usr) return;

//   const [data, userRef] = await dataAndRef(usr);
//   if (data) {
//     if (data.selectedTask) {
//       await userRef.set({ selectedTask }, { merge: true });
//     } else {
//       await userRef.update({ selectedTask });
//     }
//   }
// };
