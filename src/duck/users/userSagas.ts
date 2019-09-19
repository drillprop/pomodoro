import { put, call, takeLatest, all } from 'redux-saga/effects';
import { loginFailure, loginSuccess } from './userActions';
import { LOGIN_START } from './userTypes';
import { auth } from '../../utils/firebase/firebase';

export function* login({ email, password }: any) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield put(loginSuccess(user));
  } catch (err) {
    yield put(loginFailure(err));
  }
}

export function* onLogin() {
  yield takeLatest(LOGIN_START, login);
}

export function* userSagas() {
  yield all([call(onLogin)]);
}
