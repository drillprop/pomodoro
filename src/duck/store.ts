import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import timerReducer, { TimerState } from './timer/timerReducer';
import tasksReducer, { TasksState } from './tasks/tasksReducer';
import userReducer, { UserState } from './users/userReducer';

const reducer = combineReducers({
  timer: timerReducer,
  tasks: tasksReducer,
  user: userReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export interface ReduxState {
  timer: TimerState;
  tasks: TasksState;
  user: UserState;
}

export default store;
