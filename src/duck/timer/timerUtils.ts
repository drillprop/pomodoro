import { database } from '../../utils/firebase/database';
import { TimeleftsParams } from './timerInterfaces';

export const saveTimersInDB = async (uid: string, config: TimeleftsParams) => {
  try {
    await database.ref(`users/${uid}`).update({
      config: { ...config }
    });
  } catch (error) {
    throw new Error(error);
  }
};
