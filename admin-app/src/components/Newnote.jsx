import React from 'react'
import './styles/Notelist.css'
import { useState } from 'react'

const Newnote = ({ handleAddNote }) => {
  const {noteText, setNoteText} = useState('');

  const handleTextChange = (event) => {
    setNoteText(event.target.value);
  }

  const handleSaveClick = () => {
    handleAddNote(noteText);
  }
  return (
    <div className='note new'>
      <textarea 
      name="" 
      id="" 
      cols="10" 
      rows="8" 
      placeholder='Type to add note...'
      value={noteText}
      onChange={handleTextChange}
      ></textarea>

      <footer>
      <small>150 remaining</small>
            <button 
            className='save'
            onClick={handleSaveClick}
            >Save</button>
      </footer>
    </div>
  )
}

export default Newnote