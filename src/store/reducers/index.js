import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import cov from './cov';
import general from './general';

export default (history) => combineReducers({
  cov,
  general,
  router: connectRouter(history),
});
