import { put, call, takeLatest, all } from 'redux-saga/effects';
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
// import { addUserToFirestore } from './userUtils';
import { getCurrentUser, loginWithGoogle } from '../../utils/firebase/auth';
import {
  RegisterAndLoginParams,
  RegisterStartAction,
  LoginStartAction
} from './userInterfaces';
import { addUserToDB } from './userUtils';

// Register

export function* onRegisterWithEmailStart() {
  yield takeLatest(REGISTER_START, registerWithEmail);
}

export function* registerWithEmail({ payload }: RegisterStartAction) {
  try {
    const { email, password } = payload;
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield call(addUserToDB, user.uid, user.email);
    if (user) {
      yield put(registerSuccess({ uid: user.uid, email: user.email }));
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
    yield call(addUserToDB, user.uid, user.email);
    if (user) {
      const { email, uid } = user;
      yield put(loginSuccess({ email, uid }));
    }
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
    // const data = yield call(userData, user);
    // yield put(loginSuccess(data));
    if (user) {
      const { email, uid } = user;
      yield put(loginSuccess({ email, uid }));
    }
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
    yield put(loginSuccess({ uid: user.uid, email: user.email }));
  }
}

//
//
// todo
//
//
export function* updateProfile(displayName: string) {
  try {
    const user = yield auth.currentUser;
    yield user.updateProfile({ displayName });
  } catch (err) {
    put(registerFailure(err));
  }
}

// export function* userData(user: any) {
//   try {
//     const userRef = yield addUserToFirestore(user);
//     const userSnapshot = yield userRef.get();
//     const { displayName, email, uid, createdAt } = yield userSnapshot.data();
//     return {
//       displayName,
//       email,
//       uid,
//       createdAt
//     };
//   } catch (err) {
//     console.log(err);
//     return err;
//   }
// }

export function* userSagas() {
  yield all([
    call(onRegisterWithEmailStart),
    call(onLoginWithEmailStart),
    call(onLoginGoogleStart),
    call(onSignOutStart),
    call(onCheckSession)
  ]);
}
