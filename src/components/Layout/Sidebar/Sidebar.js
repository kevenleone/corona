import React from 'react';
import { useSelector } from 'react-redux'
import Timer from '../../Timer'
import './Sidebar.scss';

export default function Sidebar() {
  const { global_info, countries, user_location } = useSelector(state => state.cov)
  function toFloat(num) {
    return Number(num).toLocaleString();
  }

  return (
    <div className="Sidebar">
      <section>
        <Timer user_location={user_location} />
        <div className='counters'>
          <div className='count'>
            <p>Total Active Cases</p>
            <span>{toFloat(global_info.total_active_cases)}</span>
          </div>
          <div className='count'>
            <p>Total Serious</p>
            <span>{toFloat(global_info.total_serious_cases)}</span>
          </div>
          <div className='count'>
            <p>Deaths Today</p>
            <span>{toFloat(global_info.total_new_deaths_today)}</span>
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
