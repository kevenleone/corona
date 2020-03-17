import React, { useState, useEffect } from 'react';
import './index.scss'

export default function Timer({state: { location }}) {
    const [today, setToday] = useState({
        time: getHour(),
        date: new Date().toDateString()
    });

    function getHour() {
        const dateTime = new Date().toTimeString();
        const time = dateTime.slice(0, 8);
        return time;
    }

    useEffect(() => {
        setInterval(() => {
            const time = getHour();
            setToday({time, date: new Date().toDateString()});
        }, 1000)
    }, [])

    return (
        <div className='timer'>
            <span>{today.time}</span>
            <p className='gray'>{today.date}, <br />
            {location.country && location.country.emoji}
            {location.region}</p>
            <hr />
        </div>
    )
}
