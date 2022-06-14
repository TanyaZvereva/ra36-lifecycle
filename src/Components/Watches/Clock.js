import { useEffect, useRef, useState } from "react"
import { DateTime } from "luxon"

const Clock = ({name,offset,time,sec})=>{
    const offsetTime = time.plus({seconds:sec,hours:offset})
    return(
        <div>
            <div>{name}</div>
            <div>{offsetTime.c.hour}:{offsetTime.c.minute>9?offsetTime.c.minute:'0'+offsetTime.c.minute}:{offsetTime.c.second>9?offsetTime.c.second:'0'+offsetTime.c.second}</div>
        </div>
    )
}
const ClockList = ({watches})=>{
    const [time, setTime] = useState(DateTime.now())
    const [sec, setSec] = useState(0)
    const timerId = useRef(null)
    useEffect(()=>{
        timerId.current = setInterval(()=>{
           setSec(prev => prev +1)
        }, 1000)
        return ()=>{
            clearInterval(timerId.current)
        }
    },[])
    console.log(sec)
    return(
        <div>
            {watches.map(watch=>{
                return <Clock key={watch.name+watch.zone} name={watch.name} offset={watch.zone} time={time} sec={sec}/>
            })}
        </div>
    )
}
export default ClockList