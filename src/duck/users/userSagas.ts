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

export function* isUserLoggedIn() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) {
      yield put(
        loginFailure({
          message: 'You are not logged in',
          code: 'something-wrong'
        })
      );
      return;
    }
    // const user = yield call(userData, userAuth);
    // yield put(loginSuccess(user));
  } catch (err) {
    yield put(loginFailure(err));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (err) {
    yield put(signOutFailure(err));
  }
}

export function* loginWithGoogleSaga() {
  try {
    const { user } = yield loginWithGoogle();
    // const data = yield call(userData, user);
    // yield put(loginSuccess(data));
  } catch (err) {
    yield put(loginFailure(err));
  }
}

export function* registerWithEmail({ payload }: RegisterStartAction) {
  try {
    const { email, password } = payload;
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    if (user) {
      yield put(registerSuccess({ uid: user.uid, email: user.email }));
    }
  } catch (err) {
    console.log(err);
    yield put(registerFailure(err));
  }
}

export function* loginWithEmail({ payload }: LoginStartAction) {
  try {
    const { email, password } = payload;
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    // const data = yield call(userData, user);
    console.log(user);
    yield put(loginSuccess({ uid: user.uid, email: user.email }));
  } catch (err) {
    yield put(loginFailure(err));
  }
}

export function* onRegisterStart() {
  yield takeLatest(REGISTER_START, registerWithEmail);
}

export function* onLoginStart() {
  yield takeLatest(LOGIN_START, loginWithEmail);
}

export function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOut);
}

export function* onGoogleLoginStart() {
  yield takeLatest(LOGIN_WITH_GOOGLE, loginWithGoogleSaga);
}

export function* onCheckSession() {
  yield takeLatest(CHECK_SESSION, isUserLoggedIn);
}

export function* userSagas() {
  yield all([
    call(onRegisterStart),
    call(onLoginStart),
    call(onGoogleLoginStart),
    call(onSignOutStart),
    call(onCheckSession)
  ]);
}
