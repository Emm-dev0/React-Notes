import React from 'react'
import Note from './Note'
import Newnote from './Newnote'

const Notelist = ({ notes, handleAddNote  }) => {
  return (
    <div className='NotesList'>

        {notes.map((note)=> (
        <Note id={note.id} text={note.text} date={note.date}/>
        ))}
        
        <Newnote handleAddNote={handleAddNote} />
    </div>
  )
}

export default Notelist