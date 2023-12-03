import React from 'react'
import './styles/Notelist.css'
import { MdDeleteForever } from 'react-icons/md'

const Note = ({ id, text, date}) => {
  return (
    
      <div className='note'>
          <span>{text}</span>
          <footer>
            <small>{date}</small>
            <MdDeleteForever className='delete-icon'/>
          </footer>
      </div>
    
  )
}

export default Note