import { useState,useEffect } from "react"
const CRUD = () => {
    const [newNote, setNewNote] = useState('')
    const handleAddNote = () =>{
        const raw = JSON.stringify({'content':newNote})
        const reqOptions = {
            method:'POST',
            body:raw
        }
        fetch('http://localhost:7777/notes',reqOptions)
        .then(response => response.json())
        .then(result => console.log(result))
    }
 return <section>
    <div>
        <textarea onChange={(e)=>setNewNote(e.currentTarget.value)}></textarea>
        <button onClick={handleAddNote}>{'>'}</button>
    </div>
 </section>
}
export default CRUD