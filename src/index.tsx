import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './duck/store';

const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
);
