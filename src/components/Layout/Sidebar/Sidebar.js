import React from 'react';
import { useSelector } from 'react-redux';
import Timer from '../../Timer';
import './Sidebar.scss';

import { helpers } from '../../../utils';

export default function Sidebar() {
  const { globalInfo, countries, userLocation } = useSelector((state) => state.cov);
  function toFloat(num) {
    return Number(num).toLocaleString();
  }

  return (
    <div className="Sidebar">
      <section>
        <Timer userLocation={userLocation} />
        <div className="counters">
          <div className="count">
            <p>Total Cases</p>
            <span>{toFloat(globalInfo.cases)}</span>
          </div>
          <div className="count">
            <p>Total Deaths</p>
            <span>{toFloat(globalInfo.deaths)}</span>
          </div>
          <div className="count">
            <p>Total Recovered</p>
            <span>{toFloat(globalInfo.recovered)}</span>
          </div>
        </div>

        <div>
          <hr />
        </div>
        <div className="footer">
          <span>Top 10 Dangers Country</span>
          <table className="mt-3">
            <tbody>
              <tr>
                <th colSpan={2}>Country</th>
                <th>Total</th>
              </tr>
              { countries.top10.map((country) => (
                <tr key={country.code}>
                  <td>{country.emoji}</td>
                  <td>{country.name}</td>
                  <td>{helpers.rounded(country.cases)}</td>
                </tr>
              )) }
              <tr />
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
