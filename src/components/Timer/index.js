import React, { useState, useEffect, useCallback } from 'react';
// import 'moment/locale/pt-br';
import moment from 'moment-timezone';
import './index.scss';

export default function Timer({ userLocation }) {
  const getDate = useCallback(() => {
    const { timezone } = userLocation;
    const todayMoment = moment.tz(timezone);
    return {
      date: todayMoment.format('dddd, DD MMMM YYYY'),
      time: todayMoment.format('HH:mm:ss'),
    };
  }, [userLocation]);

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
