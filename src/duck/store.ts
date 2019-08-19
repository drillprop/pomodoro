import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import timerReducer from './timer/timerReducer';
import tasksReducer from './tasks/tasksReducers';

const reducer = combineReducers({ timerReducer, tasksReducer });

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
