import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import './index.scss';

export default function Timer() {
  const getDate = useCallback(() => {
    const todayMoment = moment();
    return {
      date: todayMoment.format('dddd, DD MMMM YYYY'),
      time: todayMoment.format('HH:mm:ss'),
    };
  }, []);

  const [today, setToday] = useState(getDate());

  useEffect(() => {
    setInterval(() => {
      setToday(getDate());
    }, 1000);
  }, [getDate]);

  return (
    <div className="timer">
      <span>{today.time}</span>
    </div>
  );
}
