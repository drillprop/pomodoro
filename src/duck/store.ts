import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleWare from 'redux-saga';
import menuReducer, { MenuState } from './menu/menuReducer';
import rootSaga from './rootSagas';
import statsReducer, { StatsState } from './stats/statsReducer';
import tasksReducer, { TasksState } from './tasks/tasksReducer';
import timerReducer, { TimerState } from './timer/timerReducer';
import userReducer, { UserState } from './users/userReducer';

export const sagaMiddleware = createSagaMiddleWare();

const reducer = combineReducers({
  timer: timerReducer,
  tasks: tasksReducer,
  user: userReducer,
  stats: statsReducer,
  menu: menuReducer,
});

const store = createStore(
  reducer,
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware)
);

export interface ReduxState {
  timer: TimerState;
  tasks: TasksState;
  user: UserState;
  stats: StatsState;
  menu: MenuState;
}

sagaMiddleware.run(rootSaga);

export default store;
