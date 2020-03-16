import React from 'react';
import Timer from '../../Timer'
import './Sidebar.scss';

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <section>
        <Timer />
        <div className='counters'>
          <div className='count'>
            <p> GPS Amount</p>
            <span>124, 305, 82</span>
          </div>
          <div className='count'>
            <p>Total Mileage</p>
            <span>124, 305, 82</span>
          </div>
        </div>

        <hr />

        <span>Country List</span>
        <ul>
          <li>Brazil</li>
          <li>Italy</li>
        </ul>
      </section>
    </div>
  );
}
