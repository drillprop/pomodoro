import { call, put, takeLatest, all, select } from 'redux-saga/effects';
import {
  CREATE_TASK_START,
  EDIT_TASK_START,
  DELETE_TASK_START,
  SWITCH_TASK_START
} from './taskTypes';
import {
  createTaskSuccess,
  createTaskFailure,
  editTaskSuccess,
  editTaskFailure,
  deleteTaskFailure,
  deleteTaskSuccess,
  switchTaskFailure,
  switchTaskSuccess
} from './tasksActions';
import {
  CreateTaskStartAction,
  EditTaskStartAction,
  DeleteTaskStartAction,
  SwitchTaskStartAction
} from './tasksInterfaces';
import {
  saveTaskInDB,
  editTaskInDB,
  deleteTaskFromDB,
  changeSelectedTaskDB
} from './tasksUtils';
import { ReduxState } from '../store';

const userUid = ({ user }: ReduxState) => user.currentUser;

export function* onCreateTask() {
  yield takeLatest(CREATE_TASK_START, createTask);
}

export function* createTask({ payload }: CreateTaskStartAction) {
  try {
    const { uid } = yield select(userUid);
    yield call(saveTaskInDB, uid, payload);
    yield put(createTaskSuccess(payload));
  } catch (error) {
    yield put(createTaskFailure(error));
  }
}

export function* onEditTask() {
  yield takeLatest(EDIT_TASK_START, editTask);
}

export function* editTask({ payload }: EditTaskStartAction) {
  try {
    const { uid } = yield select(userUid);
    yield call(editTaskInDB, uid, payload.prevTask, payload.newTask);
    yield put(editTaskSuccess({ ...payload }));
  } catch (error) {
    yield put(editTaskFailure(error));
  }
}

export function* onDeleteTask() {
  yield takeLatest(DELETE_TASK_START, deleteTask);
}

export function* deleteTask({ payload }: DeleteTaskStartAction) {
  try {
    const { uid } = yield select(userUid);
    yield call(deleteTaskFromDB, uid, payload);
    yield put(deleteTaskSuccess(payload));
  } catch (error) {
    yield put(deleteTaskFailure(error));
  }
}

export function* onSwitchTask() {
  yield takeLatest(SWITCH_TASK_START, switchTask);
}

export function* switchTask({ payload }: SwitchTaskStartAction) {
  try {
    const { uid } = yield select(userUid);
    yield call(changeSelectedTaskDB, uid, payload);
    yield put(switchTaskSuccess(payload));
  } catch (error) {
    yield put(switchTaskFailure(error));
  }
}

export function* taskSagas() {
  yield all([
    call(onCreateTask),
    call(onEditTask),
    call(onDeleteTask),
    call(onSwitchTask)
  ]);
}
