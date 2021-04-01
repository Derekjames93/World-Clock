import React, {useEffect, useState} from 'react'
import TimezoneSelect from 'react-timezone-select'
import AnalogClock from 'analog-clock-react';


export default function Home() {
    const [showClock, setShowClock] = useState(false)
    const [timezone, setTimezone] = useState('')
    const [time, setTime] = useState({hours: 0, minutes: 0, seconds: 0})

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowClock(true)
    }

    
    useEffect(() => {
        const updateClock = () => {
            console.log(timezone)
            const timeZoneTime = new Date().toLocaleString('en-US', {
                timeZone: timezone.value
            })
    
            const dateTime = new Date(timeZoneTime)
            setTime({
                hours:dateTime.getHours(),
                minutes: dateTime.getMinutes(),
                seconds: dateTime.getSeconds()
            })
        }
        const interval = setInterval(() => {
            updateClock();

        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [timezone])

    return (
        <div>
            <h1>World Clock</h1>
            <form onSubmit={handleSubmit}>
            <TimezoneSelect
          value={timezone}
          onChange={setTimezone}
        />
            <button type="submit">Set</button>
            </form>
            {timezone && <AnalogClock 
                useCustomTime {...time}
            />}
        </div>
    )
}
