import { dataAndRef } from '../../utils/firebase/firestore';
import { getToday } from '../../utils/helpers';
import { addUserToFirestore } from '../users/userUtils';
import { firestore } from '../../utils/firebase/firebase';
import { getCurrentUser } from '../../utils/firebase/auth';

export const incIntervalInFirestore = async (selectedTask: string) => {
  const today = getToday();

  const usr = await getCurrentUser();
  if (!usr) return;

  const [data, usrRef] = await dataAndRef(usr);

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

      usrRef.update({
        [`tasks.${selectedTask}`]: savedTask + 1
      });
    }
  }

  // inc in taskByDay

  const todayRef = usrRef.collection('intervalsByDay').doc(today);
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
  const usr = await getCurrentUser();
  if (!usr) return;

  const timer = isInterval ? 'intervalTime' : 'breakTime';
  const [data, userRef] = await dataAndRef(usr);

  if (data) {
    if (!data.config || !data.config[timer]) {
      await userRef.set({ config: { [timer]: seconds } }, { merge: true });
    } else {
      await userRef.update({ [`config.${timer}`]: seconds });
    }
  }
};

export const fetchInitialState = async () => {
  const usr: any = await getCurrentUser();
  if (!usr) return;
  const usrRef = await firestore.doc(`users/${usr.uid}`);

  const doc = await usrRef.get();
  const data = await doc.data();

  if (!data) {
    await addUserToFirestore(usr, null);
  }

  return data;
};