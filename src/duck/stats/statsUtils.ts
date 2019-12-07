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
    throw new Error(error);
  }
};

export const fetchStatsDB = async (uid: string) => {
  try {
    const userStatsRef = database.ref(`stats/${uid}`);
    const statsData = await userStatsRef.once('value').then(snap => snap.val());
    return statsData;
  } catch (error) {
    throw new Error(error);
  }
};
