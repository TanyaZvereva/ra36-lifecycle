import { useState,useEffect } from "react"
import './style.css'
const CRUD = () => {
    const [newNote, setNewNote] = useState('')
    const [noteList, setNoteList] = useState([])
    const hadleGetNoteList = () =>{
        fetch('http://localhost:7775/notes')
        .then(response => response.json())
        .then(result => setNoteList(result))
    }
    useEffect(()=>{
        hadleGetNoteList()
    },[])
    const handleAddNote = () =>{
        const raw = JSON.stringify({'content':newNote})
        const reqOptions = {
            method:'POST',
            body:raw
        }
        fetch('http://localhost:7775/notes',reqOptions)
        .then(response => response.json())
        .then(result => setNoteList(prev=>[...prev,result]))
    }
    const handleRemoveNote = (id)=>{
        const reqOptions = {
            method:'DELETE',
        }
        fetch('http://localhost:7775/notes/'+ id,reqOptions)
        .then(()=>setNoteList(prev=>{
            return prev.filter(f=>f.id!==id)
        }))
    }
 return <section className="crud">
    <span>Notes</span>
    <button onClick={hadleGetNoteList}>Refresh</button>
    <div className="note-list">
        {noteList.map(note=>{
          return(
            <div className="note" key={note.id}>{note.content}
            <div className="remove" onClick={()=>handleRemoveNote(note.id)}>X</div>
            </div>
          )
        })}
    </div>
    <div>
        <textarea onChange={(e)=>setNewNote(e.currentTarget.value)}></textarea>
        <button onClick={handleAddNote}>{'>'}</button>
    </div>
 </section>
}
export default CRUD