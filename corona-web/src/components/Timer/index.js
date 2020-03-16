import React, { useState, useEffect } from 'react';



export default function Timer() {
    const [today, setToday] = useState({
        time: getHour(),
        date: new Date().toDateString()
    })

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
        <div>
            <h1>{today.time}</h1>
            <p className='gray'>{today.date}, Recife</p>
            <hr />
        </div>
    )
}
