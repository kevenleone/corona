import React, { useState, useEffect, useCallback } from 'react';
import 'moment/locale/pt-br'
import moment from 'moment-timezone'
import './index.scss'

export default function Timer({user_location}) {
    const getDate = useCallback(() => {
        const timezone = user_location.timezone;
        const todayMoment = moment.tz(timezone);
        return {
            date: todayMoment.format('dddd, DD MMMM YYYY'),
            time: todayMoment.format('HH:mm:ss'),
        }
    }, [user_location]);

    const [today, setToday] = useState(getDate());

    useEffect(() => {
        setInterval(() => {
            setToday(getDate());
        }, 1000)
    }, [getDate])

    return (
        <div className='timer'>
            <span>{today.time}</span>
            <p className='gray'>{today.date} <br />
            {user_location.country && user_location.country.emoji}
            {user_location.region}</p>
            <hr />
        </div>
    )
}
