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
