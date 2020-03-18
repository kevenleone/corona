import { takeLatest } from 'redux-saga/effects'
import { getInsights } from './actions/cov'

export default function* allSagas() {
    yield takeLatest('GET_ALL_INSIGHTS', getInsights);
}