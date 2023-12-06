import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoChevronBackCircle } from 'react-icons/io5'
import '../components/styles/Note.css'
import { useState } from 'react'
import {v4 as uuid} from 'uuid'

import useCreateDate from '../components/useCreateDate'




const Createnote = ({setNotes}) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(title && text) {

      const note = {id:uuid(), title, text, date}

      //adds the current notes to the array of notes
      setNotes(prevNotes => [note, ...prevNotes])
      console.log(note)

      //redirects us back to our notes homepage
      navigate('/')
    }

   
  }

  return (
   <div className='container'>
      <div className='header-container'>
          <div className='title'>
          <Link to={'/'}><IoChevronBackCircle className='backArrow'/></Link>
          </div>
           <button onClick={handleSubmit}>Save</button>
        
      </div>
      <form action="" className='create-note_form' onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} autoFocus className='title-input' value={title}/>
        <textarea rows="28" placeholder='Note details...' onChange={(e) => setText(e.target.value)} value={text}  className='note-input'></textarea>
      </form>
      
    </div>
  )
}

export default Createnote