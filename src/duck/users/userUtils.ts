import { database } from '../../utils/firebase/database';
import { getCurrentUser, provider } from '../../utils/firebase/auth';
import { EmailAuthProvider } from '../../utils/firebase/firebase';
import 'firebase/auth/';
import { User } from 'firebase';

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
    throw new Error(error);
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
    throw new Error(error);
  }
};

export const getLoginProvider = (user: User) => {
  if (user && user.providerData[0]) {
    return user.providerData[0].providerId;
  }
  return null;
};

export const changePasswordFirebase = async (
  oldPassword: string,
  newPassword: string
) => {
  try {
    const user = await getCurrentUser();
    if (user && user.email) {
      const loginProvider = getLoginProvider(user);
      if (loginProvider === 'password') {
        const credentials = EmailAuthProvider.credential(
          user.email,
          oldPassword
        );
        await user.reauthenticateWithCredential(credentials);
        await user.updatePassword(newPassword);
      } else {
        throw new Error(
          `You cant change password if you didn't register with email and password`
        );
      }
    }
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteAuthUser = async (password: string = '') => {
  try {
    const user = await getCurrentUser();
    if (user) {
      const loginProvider = getLoginProvider(user);
      if (loginProvider === 'password' && user.email) {
        const credentials = EmailAuthProvider.credential(user.email, password);
        await user.reauthenticateWithCredential(credentials);
        await user.delete();
      } else if (loginProvider === 'google.com') {
        await user.reauthenticateWithPopup(provider);
        await user.delete();
      }
    }
  } catch (error) {
    throw new Error(error);
  }
};
