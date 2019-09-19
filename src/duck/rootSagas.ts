import { all, call } from 'redux-saga/effects';
import { statsSagas } from './stats/statsSagas';
import { taskSagas } from './tasks/taskSagas';

export default function* rootSaga() {
  yield all([call(statsSagas), call(taskSagas)]);
}
