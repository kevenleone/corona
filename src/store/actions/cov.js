import {
  all,
  call,
  put,
} from 'redux-saga/effects';
import axios from 'axios';

import { countries, api } from '../../utils';

function getLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      resolve({ latitude, longitude });
    }, (error) => {
      reject(error);
    });
  });
}

function* getGlobalStatus() {
  const response = yield call(axios.get, api.globalStatus);
  const { data } = response;
  yield put({ type: 'SET_GLOBAL_STATUS', payload: data });
}

function* getUserLocation() {
  const { latitude, longitude } = yield call(getLocation);
  const geocodeApi = api.userLocation({ latitude, longitude });
  const response = yield call(axios.get, geocodeApi);
  const location = response.data;
  yield put({
    type: 'SET_USER_LOCATION',
    payload: {
      ...location,
      country: countries.find((country) => country.code === location.state),
    },
  });
}

function* getCountriesStatus() {
  const response = yield call(axios.get, api.countries);
  const { data } = response;

  const allCountries = data.map((country) => {
    const ct = countries.find((cty) => {
      if (cty.or) {
        return cty.or.includes(country.country);
      }
      return cty.name === country.country;
    });
    return {
      ...country,
      ...ct,
    };
  });

  const top10 = allCountries
    .sort((A, B) => {
      if (A.cases < B.cases) {
        return -1;
      }
      if (A.cases > B.cases) {
        return 1;
      }
      return 0;
    })
    .reverse()
    .slice(0, 10);

  yield put({ type: 'SET_COUNTRIES_STATUS', payload: { all: allCountries, top10 } });
}

export function* getInsights(params) {
  try {
    const pipeline = [
      call(getGlobalStatus, params),
      call(getUserLocation, params),
      call(getCountriesStatus),
    ];

    yield all(pipeline);
  } catch (e) {
    console.log(e);
  }
}
