import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import rootReducer from './reducers';
import rootSaga from './sagas';
import history from '../utils/history';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const store = createStore(
  rootReducer(history),
  compose(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);
export default store;
