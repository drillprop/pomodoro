import { call, put, takeLatest, all } from 'redux-saga/effects';
import { CREATE_TASK_START, EDIT_TASK_START } from './taskTypes';
import {
  createTaskSuccess,
  createTaskFailure,
  editTaskSuccess,
  editTaskFailure
} from './tasksActions';
import { saveTasksInFirestore, updateTaskInFirestore } from './tasksUtils';

export function* createTaskAsync({ taskName }: any) {
  try {
    yield call(saveTasksInFirestore, taskName);
    yield put(createTaskSuccess(taskName));
  } catch (err) {
    yield put(createTaskFailure(err));
  }
}

export function* editTaskAsync({ prevTask, newTask }: any) {
  try {
    yield call(updateTaskInFirestore, prevTask, newTask);
    yield put(editTaskSuccess(prevTask, newTask));
  } catch (err) {
    yield put(editTaskFailure(err));
  }
}

export function* onCreateTask() {
  yield takeLatest(CREATE_TASK_START, createTaskAsync);
}

export function* onEditTask() {
  yield takeLatest(EDIT_TASK_START, editTaskAsync);
}

export function* taskSagas() {
  yield all([call(onCreateTask), call(onEditTask)]);
}
