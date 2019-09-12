import { getCurrentUser } from '../../utils/firebase/firestore';
import { firestore } from '../../utils/firebase/firebase';

export const getIntervalsByDay = async () => {
  const user: any = await getCurrentUser();
  if (!user) return;

  const userId = user ? user.uid : null;
  try {
    const intervalsByDayRef = firestore.collection(
      `users/${userId}/intervalsByDay/`
    );
    const intervalsByDaySnapshot = await intervalsByDayRef.get();
    const intervalsByDayDocs = intervalsByDaySnapshot.docs;
    return intervalsByDayDocs.map(day => ({
      date: day.id,
      intervals: { ...day.data() }
    }));
  } catch (error) {
    return error;
  }
};
