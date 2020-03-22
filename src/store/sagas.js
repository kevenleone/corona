import { takeLatest } from 'redux-saga/effects';
import { getInsights, getUserLocation } from './actions/cov';
import { moveBack, moveForward } from './actions/general';

export default function* allSagas() {
  yield takeLatest('GET_ALL_INSIGHTS_SAGA', getInsights);
  yield takeLatest('GET_USER_LOCATION_SAGA', getUserLocation);

  yield takeLatest('MOVE_FORWARD_SAGA', moveForward);
  yield takeLatest('MOVE_BACK_SAGA', moveBack);
}
