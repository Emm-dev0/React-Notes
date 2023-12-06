import React, { useEffect } from 'react'
import { useState } from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { GrClose } from 'react-icons/gr'
import { RiSearchLine } from 'react-icons/ri'
import '../components/styles/Note.css'
import { Link } from 'react-router-dom'
import Note from '../components/Note'



const Notes = ({notes}) => {

  const [text, setText] = useState('')
  const [ filteredNotes, setFilterednotes] = useState(notes)

  const handleSearch = () => {
      setFilterednotes(notes.filter(notes => {
        if(notes.title.toLowerCase().match(text.toLowerCase())) {
          return notes;
        }
      }))

  }

  useEffect(handleSearch, [text])

      return ( 
        <div className='container'>
            <div className='header-container-responsive'>
              
                <h1>Notes</h1>
                <div className="searchbar-container">
                       <input 
                        type="text" 
                        value={text}
                        onChange={(e) => {setText(e.target.value); handleSearch();}}
                        name="searchNotes" 
                        className='searchbar' 
                        placeholder='Search notes...'
                      autoFocus
                     /> 
                       <button> <RiSearchLine className='search-icon' /></button>
                 </div> 
            </div>
            <div className='NotesList'>
              {filteredNotes.length == 0 && <p>No notes found.</p>}
                {filteredNotes.map((note)=> (
                <Note id={note.id} title={note.title} text={note.text} date={note.date}/>
                ))}

             </div>
            <Link to={'/create-note'}><CiCirclePlus className='plus'/></Link>
            
        </div>
        
      )
    }


export default Notes