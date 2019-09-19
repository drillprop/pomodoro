import { call, put, takeLatest, all } from 'redux-saga/effects';
import { CREATE_TASK_START } from './taskTypes';
import { createTaskSuccess, createTaskFailure } from './tasksActions';
import { saveTasksInFirestore } from './tasksUtils';

export function* createTaskAsync({ taskName }: any) {
  try {
    yield call(saveTasksInFirestore, taskName);
    yield put(createTaskSuccess(taskName));
  } catch (err) {
    yield put(createTaskFailure(err));
  }
}

export function* onCreateTask() {
  yield takeLatest(CREATE_TASK_START, createTaskAsync);
}

export function* taskSagas() {
  yield all([call(onCreateTask)]);
}
