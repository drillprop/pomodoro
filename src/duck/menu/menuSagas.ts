import {
  all,
  call,
  delay,
  put,
  race,
  take,
  takeLatest,
} from 'redux-saga/effects';
import { clearNotification, hideNotification } from './menuActions';
import { CREATE_NOTIFICATION, HIDE_NOTIFICATION } from './menuTypes';

export function* createNotificationSaga() {
  yield delay(4000);
  yield put(hideNotification());
}

export function* onCreateNotification() {
  yield takeLatest(CREATE_NOTIFICATION, function* (...args) {
    yield race({
      start: call(createNotificationSaga),
      cancel: take([HIDE_NOTIFICATION]),
    });
  });
}

export function* onHideNotification() {
  yield takeLatest(HIDE_NOTIFICATION, hideNotificationSaga);
}

export function* hideNotificationSaga() {
  yield delay(500);
  yield put(clearNotification());
}

export function* menuSagas() {
  yield all([call(onCreateNotification), call(onHideNotification)]);
}
