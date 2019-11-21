import { database } from '../../utils/firebase/database';
import { getToday } from '../../utils/helpers';

export const incIntervalDB = async (
  uid: string,
  taskName: string,
  intervalTime: number
) => {
  try {
    const today = getToday();
    // increment intervals in users node
    const taskRef = database.ref(`users/${uid}/tasks/${taskName}`);
    await taskRef.transaction(count => count + 1);

    // increment intervals in stats node
    const statsRef = database.ref(`/stats/${uid}/${today}/tasks/${taskName}`);
    await statsRef.transaction(count => count + 1);
    // increment time in stats node
    const timeDailyRef = database.ref(`/stats/${uid}/${today}/time`);
    await timeDailyRef.transaction(count => count + intervalTime);
  } catch (error) {
    return error;
  }
};
// import { firestore } from '../../utils/firebase/firebase';

// export const getIntervalsByDay = async () => {
//   const user: any = await getCurrentUser();
//   if (!user) return;

//   const userId = user ? user.uid : null;

//   try {
//     const intervalsByDayRef = firestore.collection(
//       `users/${userId}/intervalsByDay/`
//     );
//     const intervalsByDaySnapshot = await intervalsByDayRef.get();
//     const intervalsByDayDocs = intervalsByDaySnapshot.docs;

//     return intervalsByDayDocs.reduce((acc: any, day: any) => {
//       acc[day.id] = { ...day.data() };
//       return acc;
//     }, {});
//   } catch (error) {
//     return error;
//   }
// };
