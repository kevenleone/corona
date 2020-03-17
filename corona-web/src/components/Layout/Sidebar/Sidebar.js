import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Timer from '../../Timer'
import countries from '../../../utils/countries'
import './Sidebar.scss';

export default function Sidebar() {
  const [state, setState] = useState({
    total_cases: 0,
    total_recovered: 0,
    total_deaths: 0,
    countries: {
      top10: [],
      all: []
    },
    location: {}
  });
  async function getStatus() {
    const response = await axios.get('https://thevirustracker.com/free-api?global=stats')
    const data = response.data;
    if (data.stat === 'ok') {
      setState(prevState => ({
        ...prevState,
        ...data.results[0]
      }))
    }
  }

  async function getLocation() {
    navigator.geolocation.getCurrentPosition(async ({coords: { latitude, longitude }}) => {
      const response = await axios.get(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
      const location = response.data;
      setState(prevState => ({
        ...prevState,
        location: {
          ...location,
          country: countries.find(country => country.code === location.state)
        }
      }))
    })
  }

  async function getCountriesStatus() {
    const response = await axios.get('https://cors-anywhere.herokuapp.com/https://health-api.com/api/v1/covid-19/countries');
    const all = response.data;
    const top10 = all
      .sort(({confirmed: A}, {confirmed: B}) => {
        if (A < B) { return -1 }
        if (A > B) { return 1 }
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
      })

    setState(prevState => ({
      ...prevState,
      countries: {
        all,
        top10
      }
    }))
  }

  useEffect(() => {
    Promise.all([
      getStatus(), 
      getLocation(), 
      getCountriesStatus()
    ])
  }, []);

  function toFloat(num) {
    return Number(num).toLocaleString();
  }

  return (
    <div className="Sidebar">
      <section>
        <Timer state={state} />
        <div className='counters'>
          <div className='count'>
            <p>Total Cases</p>
            <span>{toFloat(state.total_cases)}</span>
          </div>
          <div className='count'>
            <p>Total Recovered</p>
            <span>{toFloat(state.total_recovered)}</span>
          </div>
          <div className='count'>
            <p>Total Deaths</p>
            <span>{toFloat(state.total_deaths)}</span>
          </div>
        </div>

        <div>
          <hr />
        </div>
        <div className='footer'>
          <span>Top 10 Dangers Country</span>
          <ul>
            { state.countries.top10.map(country => (
              <li key={country.code}>{country.emoji} {country.name}</li>
            )) }
          </ul>
        </div>

      </section>
    </div>
  );
}
