import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleWare from 'redux-saga';
import timerReducer, { TimerState } from './timer/timerReducer';
import tasksReducer, { TasksState } from './tasks/tasksReducer';
import userReducer, { UserState } from './users/userReducer';
import statsReducer, { StatsState } from './stats/statsReducer';
import rootSaga from './rootSagas';

export const sagaMiddleware = createSagaMiddleWare();

const reducer = combineReducers({
  timer: timerReducer,
  tasks: tasksReducer,
  user: userReducer,
  stats: statsReducer
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export interface ReduxState {
  timer: TimerState;
  tasks: TasksState;
  user: UserState;
  stats: StatsState;
}

sagaMiddleware.run(rootSaga);

export default store;
