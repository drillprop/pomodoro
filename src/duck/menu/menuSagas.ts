import {
  takeLatest,
  delay,
  put,
  all,
  call,
  race,
  take
} from 'redux-saga/effects';
import { CREATE_NOTIFICATION, CLEAR_NOTIFICATION } from './menuTypes';
import { clearNotification } from './menuActions';

export function* createNotificationSaga() {
  yield delay(5000);
  yield put(clearNotification());
}

export function* onCreateNotification() {
  yield takeLatest(CREATE_NOTIFICATION, function*(...args) {
    yield race({
      start: call(createNotificationSaga),
      cancel: take([CLEAR_NOTIFICATION])
    });
  });
}

export function* menuSagas() {
  yield all([call(onCreateNotification)]);
}
