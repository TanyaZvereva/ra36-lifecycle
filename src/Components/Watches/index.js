import {useCallback, useState} from 'react';
import ClockList from './Clock';
import './style.css'
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
                <label className='name'>
                    Название
                <input type='text' value={form.name} onChange={(e)=>setForm(prev=>({...prev,name:e.target.value}))}/>
                </label>
                <label className='zone'>
                    Временная зона
                <input type='number' value={form.zone} onChange={(e)=>setForm(prev=>({...prev,zone:parseInt(e.target.value)}))}/>
                </label>
                <button type='button' onClick={addWatch}>Добавить</button>
            </form>
            {watches.length ? <ClockList watches={watches} removeWatch={removeWatch}/> : ''}
        </div>
    )
}
export default Watches