import {useCallback, useState} from 'react';
import ClockList from './Clock';
const initialForm = {name:'', zone: 0}
const Watches = () => {
    const [form, setForm] = useState(initialForm)
    const [watches, setWatches] = useState([])
    const addWatch = useCallback(()=>{
        setWatches(prev=>[...prev,form])
        setForm(initialForm)
    },[form])
    const removeWatch = useCallback((index)=>{
       setWatches(prev=>prev.filter((f,key)=>key!==index))
    },[])
    return(
        <div>
            <form>
                <input type='text' value={form.name} onChange={(e)=>setForm(prev=>({...prev,name:e.target.value}))}/>
                <input type='number' value={form.zone} onChange={(e)=>setForm(prev=>({...prev,zone:parseInt(e.target.value)}))}/>
                <button type='button' onClick={addWatch}>Добавить</button>
            </form>
            {watches.length ? <ClockList watches={watches} removeWatch={removeWatch}/> : ''}
        </div>
    )
}
export default Watches