import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import * as serviceWorker from './serviceWorker';
import history from './utils/history';
import store from './store';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
serviceWorker.unregister();
