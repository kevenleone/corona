import { push, goBack } from 'connected-react-router';
import { put } from 'redux-saga/effects';

const paths = ['/', '/countries', '/status'];

export function* moveForward() {
  const { pathname } = window.location;
  const page = paths[paths.findIndex((path) => pathname === path) + 1];
  if (page) {
    yield put(push(page));
  }
}

export function* moveBack() {
  console.log(window.location);
  yield put(goBack());
}
