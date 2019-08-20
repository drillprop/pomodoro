import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import timerReducer from './timer/timerReducer';
import tasksReducer from './tasks/tasksReducers';
import usersReducers from './users/userReducer';

const reducer = combineReducers({ timerReducer, tasksReducer, usersReducers });

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
