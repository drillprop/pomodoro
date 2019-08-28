import { firestore, FieldValue } from './firebase';
import { getStorageUser, getToday } from '../helpers';

// Globals
const usr = getStorageUser();
const today = getToday();

export const dataAndRef = async (): Promise<any> => {
  if (!usr) return;

  const usrRef = await firestore.doc(`users/${usr.uid}`);

  const doc = await usrRef.get();
  const data = await doc.data();

  return [data, usrRef, doc];
};

export const addUserToFirestore = async () => {
  if (!usr) return;

  const [, usrRef, doc] = await dataAndRef();

  if (!doc.exists) {
    const { displayName, email } = usr;
    const createdAt = new Date();

    try {
      usrRef.set({
        displayName,
        email,
        createdAt,
        tasks: {
          default: 0
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  return usrRef;
};

export const saveTasksInFirestore = async (task: any) => {
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
  if (!usr) return;

  const [data, usrRef] = await dataAndRef();

  // inc in tasks

  if (data) {
    const { tasks } = data;
    if (!tasks) {
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
