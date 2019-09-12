import { getCurrentUser } from '../../utils/firebase/firestore';
import { firestore } from '../../utils/firebase/firebase';

export const getIntervalsByDay = async () => {
  const user: any = await getCurrentUser();
  if (!user) return;

  const userId = user ? user.uid : null;
  try {
    const tasksByDayRef = firestore.collection(`users/${userId}/tasksByDay/`);
    const tasksByDaySnapshot = await tasksByDayRef.get();
    const tasksByDayDocs = tasksByDaySnapshot.docs;
    return tasksByDayDocs.map(day => ({
      date: day.id,
      tasks: { ...day.data() }
    }));
  } catch (error) {
    return error;
  }
};
