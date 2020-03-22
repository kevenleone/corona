import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import history from './utils/history';
import Routes from './routes';
import store from './store';
import './App.scss';

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    </div>
  );
}
