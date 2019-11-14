import { call, put, takeLatest, all } from 'redux-saga/effects';
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
// import {
//   saveTasksInFirestore,
//   updateTaskInFirestore,
//   deleteTaskFromFirestore,
//   saveSelectedTask
// } from './tasksUtils';

export function* createTaskAsync({ payload }: CreateTaskStartAction) {
  try {
    // yield call(saveTasksInFirestore, taskName);
    yield put(createTaskSuccess(payload));
  } catch (err) {
    yield put(createTaskFailure(err));
  }
}

export function* editTaskAsync({ payload }: EditTaskStartAction) {
  try {
    // yield call(updateTaskInFirestore, prevTask, newTask);
    yield put(editTaskSuccess({ ...payload }));
  } catch (err) {
    yield put(editTaskFailure(err));
  }
}

export function* deleteTaskAsync({ payload }: DeleteTaskStartAction) {
  try {
    // yield call(deleteTaskFromFirestore, taskName);
    yield put(deleteTaskSuccess(payload));
  } catch (err) {
    yield put(deleteTaskFailure(err));
  }
}

export function* switchTaskAsync({ payload }: SwitchTaskStartAction) {
  try {
    // yield call(saveSelectedTask, taskName);
    yield put(switchTaskSuccess(payload));
  } catch (err) {
    yield put(switchTaskFailure(err));
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

export function* onSwitchTask() {
  yield takeLatest(SWITCH_TASK_START, switchTaskAsync);
}

export function* taskSagas() {
  yield all([
    call(onCreateTask),
    call(onEditTask),
    call(onDeleteTask),
    call(onSwitchTask)
  ]);
}
