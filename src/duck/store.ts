import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleWare from 'redux-saga';
import thunk from 'redux-thunk';
import timerReducer, { TimerState } from './timer/timerReducer';
import tasksReducer, { TasksState } from './tasks/tasksReducer';
import userReducer, { UserState } from './users/userReducer';
import statsReducer from './stats/statsReducer';

const sagaMiddleware = createSagaMiddleWare();

const reducer = combineReducers({
  timer: timerReducer,
  tasks: tasksReducer,
  user: userReducer,
  stats: statsReducer
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);

export interface ReduxState {
  timer: TimerState;
  tasks: TasksState;
  user: UserState;
}

// sagaMiddleware.run();

export default store;
