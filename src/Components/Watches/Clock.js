import { useState } from "react"

const Clock = ({name,offset,time})=>{
    return(
        <div>
            <div>{name}</div>
            <div>{time}</div>
        </div>
    )
}
const ClockList = ({watches})=>{
    const [time, setTime] = useState(new Date())
    
    return(
        <div>
            {watches.map(watch=>{
                return <Clock name={watch.name} offset={watch.zone} time={time}/>
            })}
        </div>
    )
}
export default ClockList