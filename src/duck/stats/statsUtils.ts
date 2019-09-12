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

    return intervalsByDayDocs.reduce((acc: any, day: any) => {
      acc[day.id] = { ...day.data() };
      return acc;
    }, {});
  } catch (error) {
    return error;
  }
};
