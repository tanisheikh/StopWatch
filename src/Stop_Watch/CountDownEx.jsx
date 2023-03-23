import moment from 'moment'
import React from 'react'

const CountDownEx = () => {
    const interval=setInterval(()=>{
        const futureDate='2023-03-18T10:00:00'
        const futureDateFormat=moment(futureDate,'YYYY-MM-DD HH:mm:ss')
        const durationMoment=moment.duration(futureDateFormat.diff(moment()));
        const weeksDuration=durationMoment.weeks();
        const daysDuration=durationMoment.days();
        const hoursDuration=durationMoment.hours()
        const minutsDuration=durationMoment.minutes();
        const secondsDuraion=durationMoment.seconds();
        console.log(`countDown:${weeksDuration}:weeks ${daysDuration}:days ${hoursDuration}:hours ${minutsDuration}:minutes ${secondsDuraion}:seconds`)

    },1000)
  return (
    <div>countDownEx</div>
  )
}

export default CountDownEx;