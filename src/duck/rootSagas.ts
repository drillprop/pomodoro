import { all, call } from 'redux-saga/effects';
import { statsSagas } from './stats/statsSagas';

export default function* rootSaga() {
  yield all([call(statsSagas)]);
}
