import {
    all,
    call,
    put
} from 'redux-saga/effects'
import axios from 'axios'

import countries from '../../utils/countries'

function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(({coords: { latitude, longitude }}) => {
            resolve({latitude, longitude});
        }, (error) => {
            reject(error)
        })
    })
}

function* getGlobalStatus() {
    const response = yield call(axios.get, 'https://thevirustracker.com/free-api?global=stats');
    const data = response.data;
    if (data.stat === 'ok') {
        yield put({ type: 'SET_GLOBAL_STATUS', payload: data.results[0] })
    }
}

function* getUserLocation() {
    const { latitude, longitude } = yield call(getLocation);
    const response = yield call(axios.get, `https://geocode.xyz/${latitude},${longitude}?geoit=json`);
    const location = response.data;
    yield put({ type: 'SET_USER_LOCATION', payload: {
        ...location,
        country: countries.find(country => country.code === location.state)
    } });
}

function* getCountriesStatus() {
    const response = yield call(axios.get, 'https://cors-anywhere.herokuapp.com/https://health-api.com/api/v1/covid-19/countries');
    const all = response.data;
    const top10 = all
        .sort((A, B) => {
            if (A.confirmed < B.confirmed) {
                return -1
            }
            if (A.confirmed > B.confirmed) {
                return 1
            }
            return 0
        })
        .reverse()
        .slice(0, 10)
        .map(country => {
            const ct = countries.find(ct => ct.code === country.country_code);
            return {
                ...country,
                ...ct
            }
        });
    yield put({ type: 'SET_COUNTRIES_STATUS', payload: { all, top10 } })
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