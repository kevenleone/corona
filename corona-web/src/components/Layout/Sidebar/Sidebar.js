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
    location: {}
  });
  async function getStatus() {
    const response = await axios.get('https://thevirustracker.com/free-api?global=stats')
    const data = response.data;
    if (data.stat === 'ok') {
      setState(prev => ({
        ...prev,
        ...data.results[0]
      }))
    }
  }

  async function getLocation() {
    navigator.geolocation.getCurrentPosition(async ({coords: { latitude, longitude }}) => {
      // const response = await axios.get(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
      // console.log(response.data);
      // setState({

      // })
    })
  }

  useEffect(() => {
    getStatus();
    getLocation();
  }, []);

  function toFloat(num) {
    return Number(num).toLocaleString();
  }

  return (
    <div className="Sidebar">
      <section>
        <Timer />
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
          <span>Top 5 Dangers Country</span>
          <ul>
            { countries.slice(30, 40).map(country => (
              <li key={country.code}>{country.emoji} {country.name}</li>
            )) }
          </ul>
        </div>

      </section>
    </div>
  );
}
