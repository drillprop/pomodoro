import { call, put, takeLatest, all } from 'redux-saga/effects';
import {
  CREATE_TASK_START,
  EDIT_TASK_START,
  DELETE_TASK_START
} from './taskTypes';
import {
  createTaskSuccess,
  createTaskFailure,
  editTaskSuccess,
  editTaskFailure,
  deleteTaskFailure,
  deleteTaskSuccess
} from './tasksActions';
import {
  saveTasksInFirestore,
  updateTaskInFirestore,
  deleteTaskFromFirestore
} from './tasksUtils';

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

export function* deleteTaskAsync({ taskName }: any) {
  try {
    yield call(deleteTaskFromFirestore, taskName);
    yield put(deleteTaskSuccess(taskName));
  } catch (err) {
    yield put(deleteTaskFailure(err));
  }
}

export function* onCreateTask() {
  yield takeLatest(CREATE_TASK_START, createTaskAsync);
}

export function* onEditTask() {
  yield takeLatest(EDIT_TASK_START, editTaskAsync);
}

export function* onDeleteTask() {
  yield takeLatest(DELETE_TASK_START, deleteTaskAsync);
}

export function* taskSagas() {
  yield all([call(onCreateTask), call(onEditTask), call(onDeleteTask)]);
}
