import { put, call, takeLatest, all } from 'redux-saga/effects';
import {
  loginFailure,
  loginSuccess,
  registerFailure,
  registerSuccess
} from './userActions';
import { LOGIN_START, REGISTER_START } from './userTypes';
import { auth } from '../../utils/firebase/firebase';

export function* login({ email, password }: any) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    //! create user in firestore

    //
    yield put(loginSuccess(user));
  } catch (err) {
    yield put(loginFailure(err));
  }
}

export function* register({ email, password, displayName }: any) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    //! create user in firestore

    //
    yield put(registerSuccess(user));
  } catch (err) {
    put(registerFailure(err));
  }
}

export function* onLogin() {
  yield takeLatest(LOGIN_START, login);
}

export function* onRegister() {
  yield takeLatest(REGISTER_START, register);
}

export function* userSagas() {
  yield all([call(onLogin), call(onRegister)]);
}
