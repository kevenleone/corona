import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Timer from '../../Timer'
import countries from '../../../utils/countries'
import './Sidebar.scss';

export default function Sidebar() {
  const { global, countries, user_location } = useSelector(state => state.cov)
  const dispatch = useDispatch();

  console.log({
    cov: {
      global, countries, user_location
    },
  })

  useEffect(() => {
    dispatch({ type: 'GET_ALL_INSIGHTS' })
  }, []);

  function toFloat(num) {
    return Number(num).toLocaleString();
  }

  return (
    <div className="Sidebar">
      <section>
        <Timer user_location={user_location} />
        <div className='counters'>
          <div className='count'>
            <p>Total Cases</p>
            <span>{toFloat(global.total_cases)}</span>
          </div>
          <div className='count'>
            <p>Total Recovered</p>
            <span>{toFloat(global.total_recovered)}</span>
          </div>
          <div className='count'>
            <p>Total Deaths</p>
            <span>{toFloat(global.total_deaths)}</span>
          </div>
        </div>

        <div>
          <hr />
        </div>
        <div className='footer'>
          <span>Top 10 Dangers Country</span>
          <ul>
            { countries.top10.map(country => (
              <li key={country.code}>{country.emoji} {country.name}</li>
            )) }
          </ul>
        </div>

      </section>
    </div>
  );
}
