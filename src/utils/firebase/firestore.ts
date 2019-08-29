import { firestore, FieldValue } from './firebase';
import { getStorageUser, getToday } from '../helpers';

// Globals

const today = getToday();

export const dataAndRef = async (): Promise<any> => {
  const usr = getStorageUser();
  if (!usr) return;

  const usrRef = await firestore.doc(`users/${usr.uid}`);

  const doc = await usrRef.get();
  const data = await doc.data();

  return [data, usrRef, doc];
};

export const getTasksFromFirestore = async (usr: any) => {
  if (!usr) return;

  const usrRef = await firestore.doc(`users/${usr.uid}`);

  const doc = await usrRef.get();
  const data = await doc.data();
  console.log(data);
  if (data) {
    const { tasks } = data;
    return tasks;
  }
  return null;
};

export const getConfigFromFirestore = async (usr: any) => {
  if (!usr) return;

  const usrRef = await firestore.doc(`users/${usr.uid}`);

  const doc = await usrRef.get();
  const data = await doc.data();
  console.log(data);
  if (data) {
    const { config } = data;
    return config || {};
  }
  return {};
};

export const addUserToFirestore = async (user: any, additionalData: any) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }
  return userRef;
};

export const saveTasksInFirestore = async (task: any) => {
  const usr = getStorageUser();
  if (!usr) return;

  const [data, usrRef] = await dataAndRef();

  if (data) {
    if (!data.tasks || !data.tasks.hasOwnProperty(task)) {
      try {
        usrRef.set(
          {
            tasks: {
              [task]: 0
            }
          },
          { merge: true }
        );
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log(`${task} already exists`);
    }
  }
};

export const deleteTaskFromFirestore = async (task: string) => {
  const usr = getStorageUser();
  if (!usr) return;

  const [, usrRef] = await dataAndRef();

  await usrRef.update({
    [`tasks.${task}`]: FieldValue.delete()
  });
};

export const updateTaskInFirestore = async (
  oldTask: string,
  newTask: string
) => {
  const usr = getStorageUser();
  if (!usr) return;

  // update in firestore
  const [data, usrRef] = await dataAndRef();

  const tasks = data ? data.tasks : data;
  const savedTask = tasks[oldTask];

  await usrRef.update({
    [`tasks.${oldTask}`]: FieldValue.delete(),
    [`tasks.${newTask}`]: savedTask
  });

  // update in tasksByDay

  const todayRef = usrRef.collection('tasksByDay').doc(today);

  await todayRef.update({
    [oldTask]: FieldValue.delete(),
    [newTask]: savedTask
  });
};

export const incIntervalInFirestore = async (selectedTask: string) => {
  const usr = getStorageUser();
  if (!usr) return;

  const [data, usrRef] = await dataAndRef();

  // inc in tasks

  if (data) {
    const { tasks } = data;
    if (!tasks || !tasks[selectedTask]) {
      usrRef.set(
        {
          tasks: {
            [selectedTask]: 1
          }
        },
        { merge: true }
      );
    } else {
      const savedTask = tasks[selectedTask];
      console.log(savedTask);
      usrRef.update({
        [`tasks.${selectedTask}`]: savedTask + 1
      });
    }
  }

  // inc in taskByDay

  const todayRef = usrRef.collection('tasksByDay').doc(today);
  const todayTasks = await todayRef.get();

  if (!todayTasks.exists) {
    await todayRef.set({ [selectedTask]: 1 });
  }

  const tasks = await todayTasks.data();

  if (tasks) {
    const presentTask = tasks[selectedTask];
    await todayRef.update({
      [selectedTask]: presentTask ? presentTask + 1 : 1
    });
  }
};

export const saveInitialTimelefts = async (
  isInterval: boolean,
  seconds: number
) => {
  const usr = getStorageUser();
  if (!usr) return;

  const timer = isInterval ? 'intervalTime' : 'breakTime';
  const [data, userRef] = await dataAndRef();

  if (data) {
    if (!data.config || !data.config[timer]) {
      await userRef.set({ config: { [timer]: seconds } }, { merge: true });
    } else {
      await userRef.update({ [`config.${timer}`]: seconds });
    }
  }
};
