import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store, { sagaMiddleware } from './duck/store';
import { HashRouter } from 'react-router-dom';
import rootSaga from './duck/rootSagas';

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  app
);
