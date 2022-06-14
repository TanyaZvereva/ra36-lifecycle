import {useCallback, useState} from 'react';
import ClockList from './Clock';
const initialForm = {name:'', zone: 0}
const Watches = () => {
    const [form, setForm] = useState(initialForm)
    const [watches, setWatches] = useState([])
    const addWatches = useCallback(()=>{
        setWatches(prev=>[...prev,form])
        setForm(initialForm)
    },[form])
    return(
        <div>
            <form>
                <input type='text' value={form.name} onChange={(e)=>setForm(prev=>({...prev,name:e.target.value}))}/>
                <input type='number' value={form.zone} onChange={(e)=>setForm(prev=>({...prev,zone:parseInt(e.target.value)}))}/>
                <button type='button' onClick={addWatches}>Добавить</button>
            </form>
            <ClockList watches={watches}/>
        </div>
    )
}
export default Watches