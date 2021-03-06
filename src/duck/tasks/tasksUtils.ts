import { database } from '../../utils/firebase/database';

export const saveTaskInDB = async (uid: string, task: string) => {
  try {
    const tasks = database.ref(`/users/${uid}/tasks`);
    await tasks.update({ [task]: 0 });
    await tasks.once('value').then(snap => snap.val());
  } catch (error) {
    throw new Error(error);
  }
};

export const editTaskInDB = async (
  uid: string,
  prevTask: string,
  newTask: string
) => {
  try {
    const tasksRef = database.ref(`/users/${uid}/tasks`);
    const prevTaskValue = await tasksRef
      .child(prevTask)
      .once('value')
      .then(snap => snap.val());
    const update: any = {};
    update[prevTask] = null;
    update[newTask] = await prevTaskValue;
    await tasksRef.update(update);
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteTaskFromDB = async (uid: string, task: string) => {
  try {
    const taskRef = database.ref(`/users/${uid}/tasks/${task}`);
    await taskRef.remove();
    const selectedTaskRef = database.ref(`/users/${uid}/selectedTask`);
    const selectedTaskSnap = await selectedTaskRef
      .once('value')
      .then(snap => snap.val());
    if (selectedTaskSnap === task) {
      await selectedTaskRef.set('default');
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const changeSelectedTaskDB = async (
  uid: string,
  selectedTask: string
) => {
  try {
    const selectedTaskRef = database.ref(`/users/${uid}/selectedTask`);
    await selectedTaskRef.set(selectedTask);
  } catch (error) {
    throw new Error(error);
  }
};
