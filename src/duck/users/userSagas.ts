import { put, call, takeLatest, all, select } from 'redux-saga/effects';
import {
  loginFailure,
  loginSuccess,
  registerFailure,
  registerSuccess,
  signOutFailure,
  signOutSuccess
} from './userActions';
import {
  LOGIN_START,
  REGISTER_START,
  SIGN_OUT_START,
  CHECK_SESSION,
  LOGIN_WITH_GOOGLE
} from './userTypes';
import { auth } from '../../utils/firebase/firebase';
import { getCurrentUser, loginWithGoogle } from '../../utils/firebase/auth';
import {
  RegisterStartAction,
  LoginStartAction,
  UserData
} from './userInterfaces';
import { addUserToDB, getConfigAndTasks } from './userUtils';
import { ReduxState } from '../store';

const selectConfig = ({ timer }: ReduxState) => timer.config;
const selectTasks = ({ tasks }: ReduxState) => tasks.tasks;

export function* fetchUserInfo(user: UserData) {
  yield call(addUserToDB, user.uid, user.email);
  const userSettings = yield call(getConfigAndTasks, user.uid);
  const { email, uid } = user;
  const { tasks, selectedTask, config } = userSettings;
  const configIfNull = yield select(selectConfig);
  const tasksIfNull = yield select(selectTasks);
  yield put(
    loginSuccess({
      email,
      uid,
      tasks: tasks || tasksIfNull,
      selectedTask,
      config: config || configIfNull
    })
  );
}

// Register

export function* onRegisterWithEmailStart() {
  yield takeLatest(REGISTER_START, registerWithEmail);
}

export function* registerWithEmail({ payload }: RegisterStartAction) {
  try {
    const { email, password } = payload;
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield call(addUserToDB, user.uid, user.email);
    const config = yield select(selectConfig);
    const tasks = yield select(selectTasks);
    if (user) {
      yield put(
        registerSuccess({
          uid: user.uid,
          email: user.email,
          selectedTask: 'default',
          tasks,
          config
        })
      );
    }
  } catch (err) {
    console.log(err);
    yield put(registerFailure(err));
  }
}

// Login

export function* onLoginWithEmailStart() {
  yield takeLatest(LOGIN_START, loginWithEmail);
}

export function* loginWithEmail({ payload }: LoginStartAction) {
  try {
    const { email, password } = payload;
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield call(fetchUserInfo, user);
  } catch (err) {
    yield put(loginFailure(err));
  }
}

// Google Login

export function* onLoginGoogleStart() {
  yield takeLatest(LOGIN_WITH_GOOGLE, loginGoogle);
}

export function* loginGoogle() {
  try {
    const { user } = yield loginWithGoogle();
    yield call(fetchUserInfo, user);
  } catch (err) {
    yield put(loginFailure(err));
  }
}

// Sign Out

export function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOut);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (err) {
    yield put(signOutFailure(err));
  }
}

// Check Session

export function* onCheckSession() {
  yield takeLatest(CHECK_SESSION, checkSession);
}

export function* checkSession() {
  const user = yield call(getCurrentUser);
  if (!user) {
    yield signOut();
  } else {
    yield call(fetchUserInfo, user);
  }
}

export function* userSagas() {
  yield all([
    call(onRegisterWithEmailStart),
    call(onLoginWithEmailStart),
    call(onLoginGoogleStart),
    call(onSignOutStart),
    call(onCheckSession)
  ]);
}
